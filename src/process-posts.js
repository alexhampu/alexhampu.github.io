const fs = require('fs');
const fm = require('front-matter');
const glob = require('glob');
const marked = require('marked');

const postsDirectory = '../posts';
glob(`${postsDirectory}/**/*.md`, function (er, files) {
    let posts = files.map((path) => {
        const stripped = path.replace(postsDirectory, '').split('/');
        const year = stripped[1];
        const slug = stripped[2].replace('.md', '');
        try {
            return {
                year,
                slug,
                ...getFileData(path)
            };
        } catch (error) {
            return {
                error: error.message
            };
        }
    });

    const index = {};
    const errors = posts.filter((post) => post.error).map((item) => item.error);

    if (errors.length) {
        console.log(`There are errors while processing files`);
        console.error(errors);
    }

    posts = posts.filter((post) => !post.error);

    posts.forEach((post) => {
        if (!index[post.year]) {
            index[post.year] = [];
        }

        index[post.year].push({
            slug: post.slug,
            date: post.date,
            title: post.title,
            description: post.description,
            url: `/posts/${post.year}/${post.slug}.json`
        });
    });

    const outPostsDirectory = './public/posts';
    fs.rmdirSync(outPostsDirectory, {recursive: true});
    if (!fs.existsSync(outPostsDirectory)) {
        fs.mkdirSync(outPostsDirectory);
    }

    fs.writeFile(`${outPostsDirectory}/index.json`, JSON.stringify(index), {encoding: 'utf8'}, function (error) {
        if (error) {
            console.error(`Error while saving index with message:\n[${error.message}]`);
            return;
        }

        console.log(`Index generated: ${outPostsDirectory}/index.json`);
    });

    posts.forEach(async (post) => {
        const dir = `${outPostsDirectory}/${post.year}`;
        const path = `${dir}/${post.slug}.json`;

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        fs.writeFile(path, JSON.stringify(post), {encoding: 'utf8'}, function (error) {
            if (error) {
                console.error(`Error while saving to ${path} with message:\n[${error.message}]`);
                return;
            }

            console.log(`File saved: ${path}`);
        });
    });
});

function getFileData(path) {
    const data = fs.readFileSync(path, 'utf8');
    const content = fm(data)
    const requiredAttributes = ['title', 'date', 'description'];
    const existingAttributes = Object.keys(content.attributes);

    if (!existingAttributes.length) {
        let error = `File '${path}' is invalid because it has no attributes`;
        throw new Error(error);
    }

    requiredAttributes.forEach((attr) => {
        if (!existingAttributes.includes(attr)) {
            let error = `File '${path}' is invalid because it's missing attribute '${attr}'`;
            throw new Error(error);
        }
    });

    return {
        ...content.attributes,
        html: marked(content.body)
    };
}

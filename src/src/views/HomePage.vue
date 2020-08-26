<template>
  <div class="container mx-auto text-center my-10">
    <div class="flex justify-center text-4xl">
      <div class="mx-4"><a href="https://github.com/alexhampu" class="hover:text-blue-700"><i class="fab fa-github"></i>
        Github</a></div>
      <div class="mx-4"><a href="https://linkedin.com/in/alexhampu95" class="hover:text-blue-700"><i
          class="fab fa-linkedin"></i> LinkedIn</a></div>
    </div>

    <section class="section">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" style="text-shadow: 3px 3px 6px rgba(0, 0, 0, .3)">
        <div class="rounded-lg shadow-lg bg-red-600 py-10 text-white">
          <i class="fas fa-code-branch text-6xl mb-4"></i>
          <h6 class="text-2xl font-light">Back-end development</h6>
        </div>
        <div class="rounded-lg shadow-lg bg-green-600 py-10 text-white">
          <i class="fas fa-code text-6xl mb-4"></i>
          <h6 class="text-2xl font-light">Front-end development</h6>
        </div>
        <div class="rounded-lg shadow-lg bg-blue-600 py-10 text-white">
          <i class="fas fa-mobile text-6xl mb-4"></i>
          <h6 class="text-2xl font-light">Mobile development</h6>
        </div>
        <div class="rounded-lg shadow-lg bg-orange-500 py-10 text-white">
          <i class="fas fa-server text-6xl mb-4"></i>
          <h6 class="text-2xl font-light">Devops</h6>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="text-left">
            <h3 class="mb-4 font-light text-2xl">About me</h3>
            <p>I'm a software developer who likes photography and keeps adapting when challenges rise.</p>
            <button class="rounded-lg bg-blue-700 py-2 px-4 text-white text-sm mt-4"><i class="fas fa-download"></i> Download CV</button>
          </div>
          <div>
            <div class="bg-white rounded-lg p-4 border">
              <h3 class="mb-4 text-lg">What I'm usually working on</h3>

              <div class="mb-6">
                <ProgressBar :class="['bg-green-400']" title="Front-end development" value="40"></ProgressBar>
              </div>
              <div class="mb-6">
                <ProgressBar :class="['bg-red-400']" title="Back-end development" value="60"></ProgressBar>
              </div>
              <div class="mb-6">
                <ProgressBar :class="['bg-blue-400']" title="Mobile development" value="5"></ProgressBar>
              </div>
              <div>
                <ProgressBar :class="['bg-orange-400']" title="Devops" value="10"></ProgressBar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="mt-10 text-center">
        <h4 class="section__title">Github activity</h4>
        <div class="text-center mx-auto select-none pointer-events-none" style="max-width: 900px;">
          <img src="https://ghchart.rshah.org/alexhampu" alt="" class="w-full" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h4 class="section__title">Experience</h4>
          <div class="card">
            <div class="text-left mb-4 p-4 bg-white rounded-lg flex items-center gap-4">
              <div>
                <i class="fas fa-briefcase fa-2x"></i>
              </div>
              <div>
                <h6 class="text-sm text-gray-600">Aug 2016 – Present</h6>
                <h5 class="font-bold text-lg text-gray-800 mb-2">GSD Group</h5>
                <p class="text-gray-700">Full-stack development (HTML, CSS, JS, Angular.js, Angular, Vue.js, React, Ionic, PHP, Java, and more)</p>
              </div>
            </div>
            <div class="text-left mb-4 p-4 bg-white rounded-lg flex items-center gap-4">
              <div>
                <i class="fas fa-briefcase fa-2x"></i>
              </div>
              <div>
                <h6 class="text-sm text-gray-600">Sep 2015 – Jul 2016</h6>
                <h5 class="font-bold text-lg text-gray-800 mb-2">Olive Studio</h5>
                <p class="text-gray-700">Full-stack development (HTML, CSS, JS, jQuery, PHP, Gulp, Grunt, AWS S3)</p>
              </div>
            </div>
            <div class="text-left mb-4 p-4 bg-white rounded-lg flex items-center gap-4">
              <div>
                <i class="fas fa-briefcase fa-2x"></i>
              </div>
              <div>
                <h6 class="text-sm text-gray-600">Sep 2014 – Dec 2014</h6>
                <h5 class="font-bold text-lg text-gray-800 mb-2">OSF Global Services</h5>
                <p class="text-gray-700">Front-end development using HTML, CSS and a custom programming language based on JavaScript called DemandScript.</p>
              </div>
            </div>
            <div class="text-left p-4 bg-white rounded-lg flex items-center gap-4">
              <div>
                <i class="fas fa-briefcase fa-2x"></i>
              </div>
              <div>
                <h6 class="text-sm text-gray-600">Mar 2013 – May 2013</h6>
                <h5 class="font-bold text-lg text-gray-800 mb-2">SWS eMarketing Inc.</h5>
                <p class="text-gray-700">Front-end development using HTML, CSS and JavaScript with jQuery</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 class="section__title">Education</h4>
          <div class="card">
            <div class="text-left mb-4 p-4 bg-white rounded-lg flex items-center gap-4">
              <div>
                <i class="fas fa-graduation-cap fa-2x"></i>
              </div>
              <div>
                <h6 class="text-sm text-gray-600">2011 – 2015</h6>
                <h5 class="font-bold text-lg text-gray-800">Colegiul Tehnic Energetic Sibiu</h5>
                <p class="text-gray-700">High school, with specialisation in <strong>electronics</strong>.</p>
              </div>
            </div>
            <div class="text-left p-4 bg-white rounded-lg flex items-center gap-4">
              <div>
                <i class="fas fa-graduation-cap fa-2x"></i>
              </div>
              <div>
                <h6 class="text-sm text-gray-600">2003 – 2011</h6>
                <h5 class="font-bold text-lg text-gray-800 mb-2">Scoala nr. 20 Sibiu</h5>
                <p class="text-gray-700">Primary education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
export default {
  name: 'HomePage',
  components: {ProgressBar},
  mounted() {
    this.$store.commit('page-show-avatar');
    this.$store.commit('page-update-title', 'Hello world!');
    this.$store.commit('page-update-subtitle', `I'm a software developer`);
  }
}
</script>

<style scoped>
.section {
  @apply my-10;
}

.section__title {
  @apply text-3xl mb-6 font-light;
}

.card {
  @apply rounded-lg shadow-lg border bg-gray-200 p-10;
}
</style>

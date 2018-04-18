<template>
  <article>
    <header class="article-header">
      <h1>Baby Giant <i>Labraschnoodles</i></h1>
    </header>
    <section class="text">
      <p>Scroll down already to say hey!</p>
    </section>
    <transition-group
      class="puppies"
      name="puppy-list"
      tag="section">
      <router-link
        class="puppy"
        v-for="puppy in puppies"
        :key="puppy.id"
        tag="div"
        :to="{name: 'PuppyDetail', params: {slug: puppy.slug}}">
        <div class="puppy-image-wrapper">
          <div class="puppy-image"
               :style="{background: puppy.accentColor}">
            <img :src="puppy.images[0].fields.file.url" alt="">
          </div>
          <h4 class="taken" v-if="puppy.taken">
            I've got a home!
          </h4>
        </div>
        <div class="puppy-info">
          <h2 v-text="puppy.name"></h2>
          <h3 v-text="puppy.gender"></h3>
        </div>
      </router-link>
    </transition-group>
    <section class="text">
      <p>Meet our parents:</p>
    </section>
    <section class="parents">
      <div class="puppy">
        <div class="puppy-image-wrapper">
          <div class="puppy-image">
            <img src="" alt="">
          </div>
        </div>
        <div class="puppy-info">
          <h2>Ella</h2>
          <h3>Mother</h3>
          <p>Standard Poodle</p>
        </div>
      </div>
      <div class="puppy">
        <div class="puppy-image-wrapper">
          <div class="puppy-image">
            <img src="" alt="">
          </div>
        </div>
        <div class="puppy-info">
          <h2>Strauss</h2>
          <h3>Father</h3>
          <p>Schnauzer / Black Labrador mix</p>
        </div>
      </div>
    </section>
    <section class="text">
      <p>Not only are we cute, we've got great parents and loving hearts.</p>
      <p>But we do need homes.</p>
    </section>
  </article>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Puppies',
  computed: {
    ...mapGetters([
      'puppies'
    ])
  },
  methods: {
    ...mapActions([
      'fetchPuppies'
    ])
  },
  created () {
    this.fetchPuppies()
  },
  mounted () {
    document.title = 'Home | Labraschnoodles!'
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/mixins.scss';

  h1, h2 {
    font-family: 'essonnes-display', serif;
    font-weight: 200;
    color: rgba(black, 0.8);
  }

  h2 {
    font-size: 2pc;
    font-weight: 500;
  }

  h3 {
    font-family: 'vinyl', sans-serif;
    font-size: 0.9em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5ex;
  }

  .article-header {
    font-size: 5pc;
    @include viewportFontSize(6, 2pc, 5pc);
    text-align: left;
    max-width: 24ch;
    padding: 0;
    word-break: break-word;
    hyphens: auto;
    @media all and (min-width: 800px) {
      padding: 5pc;
    }
    h1 {
      font-size: 1em;
      margin: 0;
      line-height: 1;
    }
  }

  .text {
    position: relative;
    display: block;
    width: 100%;
    max-width: 30ch;
    padding: 4pc 0 0;
    margin: 6pc 0 4pc;
    font-family: 'essonnes-display', serif;
    font-size: 3pc;
    font-weight: 500;
    color: rgba(black, 0.8);
    line-height: 1.414;
    text-align: left;
    @media all and (min-width: 600px) {
      width: calc(100% - 5pc);
      margin-left: 5pc;
    }
    &:before {
      content: '';
      position: absolute;
      width: inherit;
      max-width: 20ch;
      left: 0;
      height: 0.25pc;
      background: rgba(black, 0.8);
    }
    &:before {
      top: 0;
    }
    p {
      margin: 0 0 1ch;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  section {
    padding: 2pc 5pc;
  }

  .puppies {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    grid-column-gap: 3pc;
    grid-row-gap: 4pc;
  }

  .puppy-list-move {
    transition: transform 0.66s ease-out;
  }

  .parents {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: center;
    grid-column-gap: 3pc;
    grid-row-gap: 4pc;
    & > .puppy {
      cursor: auto;
    }
  }

  .puppy {
    position: relative;
    cursor: pointer;
  }

  .puppy-image-wrapper {
    position: relative;
  }

  .puppy-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: rgba(0, 255, 213, 0.8);
    clip-path: circle();
    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      clip-path: circle(calc(50% - 1ch + 0.25pc) at 50% 50%);
      background: white;
    }
    img {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: inherit;
      height: 100%;
      object-fit: cover;
      padding: 1ch;
      clip-path: circle(calc(50% - 1ch) at 50% 50%);
    }
  }

  .puppy-info {
    text-align: left;
    margin: 1.5pc 0 0;
    & > h2, & > h3 {
      margin: 0;
    }
  }

  .taken {
    position: absolute;
    bottom: -0.25pc;
    right: 0;
    margin: 0;
    padding: 1pc;
    border-radius: 0.5pc;
    background: #333333;
    border: .25pc solid white;
    color: rgba(white, 1);
    font-family: 'vinyl', serif;
    font-size: 0.9em;
    font-weight: 500;
    font-style: oblique;
    text-transform: uppercase;
    letter-spacing: 0.5ex;
    transform: rotate(-7deg);
    transform-origin: bottom right;
  }
</style>

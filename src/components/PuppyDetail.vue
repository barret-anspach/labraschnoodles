<template>
  <div class="detail"
       tabindex="-1"
       @keyup.esc="close()"
       @keyup.right="nextPuppy()"
       @keyup.left="prevPuppy()"
       v-if="puppy">
    <div class="puppy-image"
         :style="puppyStyle"
         v-for="image in puppyImages"
         :key="image.sys.id">
      <img :src="image.fields.file.url" alt="">
      <h4 class="taken"
          v-if="puppy.taken">
        I've got a home!
      </h4>
    </div>
    <div class="puppy-info">
      <h2 v-text="puppy.name"></h2>
      <h3 v-text="puppy.gender"></h3>
      <p v-text="puppy.ageText"></p>

      <section
        class="personality"
        v-if="puppy.traits">
        <ul>
          <li v-for="(trait, traitIndex) in puppy.traits"
              :key="puppy.id + 'trait' + traitIndex"
              :style="{background: puppy.accentColor}">
            <span :style="{color: puppy.contrastColor}"
               v-text="trait">
            </span>
          </li>
        </ul>
      </section>

      <table class="growth-data"
             v-if="puppy.growth">
        <thead>
          <th v-for="key in Object.keys(puppy.growth[0])"
              :key="puppy.slug + 'growthHeader' + key"
              :class="key"
              v-text="key">
          </th>
        </thead>
        <tr v-for="(point, index) in puppy.growth"
            :key="puppy.slug + 'growth' + index">
          <td v-for="entry in Object.entries(point)"
              :key="puppy.slug + 'growth' + index + entry[0]"
              :class="entry[0]"
              v-text="entry[1]">
          </td>
        </tr>
      </table>
    </div>
    <div class="back-home"
         @click="close()">
      <a>Close</a>
    </div>
    <template v-if="puppies.length > 1">
      <div
        class="arrow-left"
        @click="prevPuppy()">
        <span class="text">PREV</span>
      </div>
      <div
        class="arrow-right"
        @click="nextPuppy()">
        <span class="text">NEXT</span>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PuppyDetail',
  props: [
    'slug'
  ],
  computed: {
    ...mapGetters([
      'puppies'
    ]),
    puppy () {
      if (this.puppies && this.slug) {
        const _pup = this.puppies.find(pup => pup.slug === this.slug, this)
        if (_pup) {
          document.title = `${_pup.name} | Labraschnoodles!`
        }
        return _pup
      }
    },
    puppyIndex () {
      if (this.puppy && this.puppies) {
        return this.puppies.indexOf(this.puppy)
      }
    },
    puppyStyle () {
      if (this.puppy && this.puppy.accentColor) {
        return {
          border: `1ch solid ${this.puppy.accentColor}`
        }
      }
    },
    puppyImages () {
      if (this.puppy) return this.puppy.images
    }
  },
  methods: {
    ...mapActions([
      'fetchPuppies'
    ]),
    nextPuppy () {
      this.$router.push({
        name: 'PuppyDetail',
        params: {
          slug: this.puppies[(this.puppyIndex + 1) % this.puppies.length].slug
        }
      })
    },
    prevPuppy () {
      this.$router.push({
        name: 'PuppyDetail',
        params: {
          slug: this.puppies[(((this.puppyIndex - 1) % this.puppies.length) + this.puppies.length) % this.puppies.length].slug
        }
      })
    },
    close () {
      this.$router.push({
        name: 'Home'
      })
    }
  },
  created () {
    if (!this.puppies.length) this.fetchPuppies()
  },
  mounted () {
    if (this.puppy) this.$el.focus()
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    font-family: 'essonnes-display', serif;
    font-size: 5pc;
    font-weight: 200;
    line-height: 1;
    color: rgba(black, 0.8);
    margin-bottom: 0;
  }
  h3 {
    font-family: 'vinyl', sans-serif;
    font-size: 0.9em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5ex;
    margin-bottom: 0.83 * 5pc;
  }
  .detail {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    outline: none;
    @media all and (min-width: 800px) {
      flex-flow: row nowrap;
      padding: 5pc;
    }
  }
  .puppy-image,
  .puppy-info {
    flex: 1 1 calc(50% - 3pc);
    @media all and (min-width: 800px) {
      flex: 1 1 calc(50% - 3pc);
      position: sticky;
      top: 0;
    }
  }
  .puppy-info {
    text-align: left;
  }
  .puppy-image {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 70vh;
    border: 1ch solid rgba(0, 255, 213, 0.8);
    img {
      display: block;
      position: relative;
      z-index: 3;
      width: 100%;
      height: 100%;
      max-height: calc(70vh - 4ch);
      object-fit: cover;
    }
    @media all and (min-width: 800px) {
      width: calc(50% - 5pc);
      position: absolute;
      top: 0;
      left: 5pc;
      bottom: 0;
      height: calc(100vh - 120px);
      max-height: calc(100vh - 120px);
      img {
        height: 100%;
        max-height: inherit;
      }
    }
    &:before {
      z-index: 2;
      content: '';
      position: absolute;
      display: block;
      background: white;
      width: calc(100% + 0.5pc);
      height: calc(100% + 0.5pc);
      left: calc(-0.25pc);
      top: calc(-0.25pc);
    }
  }
  .puppy-info {
    padding-left: 0;
    @media all and (min-width: 800px) {
      padding-left: 4pc;
      flex: 0 0 auto;
      margin-left: auto;
      width: calc(50% + 1pc);
    }
  }
  .personality {
    margin-top: 4pc;
  }
  .personality ul {
    padding-left: 0;
  }
  .personality ul li {
    list-style: none;
    padding: 1ch;
    margin: 0 0 1ex 0;
    background: rgba(0, 255, 213, 0.8);
    text-align: center;
  }
  .growth-data {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-auto-rows: auto;
    grid-gap: 2ex;
    justify-items: stretch;
    align-items: baseline;
    margin-top: 4pc;
    thead, tr {
      display: contents;
    }
    th, td {
      display: block;
      text-align: center;
    }
    th {
      font-family: 'vinyl', sans-serif;
      letter-spacing: 0.5ex;
      text-transform: uppercase;
      font-size: .9em;
      font-weight: 300;
    }
    th.date {
      opacity: 0;
    }
    td {
      border-top: 1px solid black;
      padding-top: 2ex;
      padding-bottom: 0.5ex;
    }
    td.date {
      border-top: none;
      text-align: right;
      font-style: oblique;
    }
  }
  .taken {
    z-index: 5;
    position: absolute;
    bottom: -0.75pc;
    right: -1.75pc;
    margin: 0;
    padding: 1pc;
    border-radius: 0.5pc;
    background: #333333;
    border: 0.25pc solid white;
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
  .arrow-left,
  .arrow-right {
    cursor: pointer;
    position: fixed;
    top: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: calc(10 * 0.414pc);
    transform-origin: center center;
    .text {
      font-family: 'vinyl', sans-serif;
      letter-spacing: 0.5ex;
      writing-mode: vertical-rl;
    }
    @media all and (min-width: 800px) {
      .text {
        display: none;
      }
      &:before, &:after {
        content: '';
        display: block;
        height: 0.125pc;
        width: 3pc;
        background: rgba(black, 0.8);
      }
      &:before {
        transform-origin: bottom left;
        transform: rotate(45deg);
      }
      &:after {
        transform-origin: top left;
        transform: rotate(-45deg);
      }
    }
  }
  .arrow-left {
    left: 1pc;
    transform: translateY(-50%) rotate(180deg);
    @media all and (min-width: 800px) {
      left: 2pc;
      transform: translateY(-50%);
    }
  }
  .arrow-right {
    right: 1pc;
    transform: translateY(-50%);
    @media all and (min-width: 800px) {
      right: 2pc;
      transform: translateY(-50%) rotate(180deg);
    }
  }
  .back-home {
    z-index: 800;
    cursor: pointer;
    position: fixed;
    top: 2.25pc;
    right: 2pc;
    a {
      display: block;
      font-family: 'vinyl', sans-serif;
      letter-spacing: 0.5ex;
      margin-right: -0.5ex;
      text-transform: uppercase;
      text-underline-position: under;
    }
  }
</style>

import { shuffle } from 'lodash'
import contentful from '@/services/contentfulService'
import Puppy from '@/classes/puppy'

import moment from 'moment'

const _ageText = (data) => {
  const _birthday = moment(data.birthday, 'MMMM D, YYYY')
  let _age = _birthday.toNow(true)
  return `${data.prefix} ${data.name} is just ${_age} old, born ${data.birthday}.`
}

const _staticPuppies = [
  {
    id: 0,
    surname: 'Blue',
    slug: 'mr-blue',
    gender: 'male',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(57, 57, 222, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0000_mr-green-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 14oz',
        length: '11.5"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '3lbs',
        length: '14"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '5lbs',
        length: '17"'
      }
    ]
  },
  {
    id: 1,
    surname: 'Yellow',
    slug: 'mr-yellow',
    gender: 'male',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(236, 235, 52, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0000_mr-green-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 13oz',
        length: '11.5"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 10oz',
        length: '14"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '4lbs 14oz',
        length: '16"'
      }
    ]
  },
  {
    id: 2,
    surname: 'Silver',
    slug: 'mr-silver',
    gender: 'male',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(206, 203, 191, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0001_mr-silver-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 11oz',
        length: '12"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 11oz',
        length: '14"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '5lbs',
        length: '16"'
      }
    ]
  },
  {
    id: 3,
    surname: 'Copper',
    slug: 'mr-copper',
    gender: 'male',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(255, 149, 59, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0001_mr-silver-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 14oz',
        length: '12"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 14oz',
        length: '14"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '4lbs 8oz',
        length: '16.5"'
      }
    ]
  },
  {
    id: 4,
    surname: 'Green',
    slug: 'mr-green',
    gender: 'male',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(14, 171, 145, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0000_mr-green-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 14oz',
        length: '10.5"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 8oz',
        length: '13"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '4lbs 9oz',
        length: '16"'
      }
    ]
  },
  {
    id: 5,
    surname: 'Pink',
    slug: 'ms-pink',
    gender: 'female',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(255, 192, 159, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0003_ms-pink-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 11oz',
        length: '11"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '3lbs',
        length: '14"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '5lbs 4oz',
        length: '17"'
      }
    ]
  },
  {
    id: 6,
    surname: 'Purple',
    slug: 'ms-purple',
    gender: 'female',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(117, 11, 144, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0003_ms-pink-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 12oz',
        length: '12"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 11oz',
        length: '13.5"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '4lbs 11oz',
        length: '16"'
      }
    ]
  },
  {
    id: 7,
    surname: 'Green',
    slug: 'ms-green',
    gender: 'female',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(49, 228, 199, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0003_ms-pink-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 8oz',
        length: '11"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 10oz',
        length: '13"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '4lbs 7oz',
        length: '16.5"'
      }
    ]
  },
  {
    id: 8,
    surname: 'Copper',
    slug: 'ms-copper',
    gender: 'female',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(255, 168, 59, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0003_ms-pink-01.jpg'),
    taken: false,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 7oz',
        length: '10.5"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 7oz',
        length: '13"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '4lbs 5oz',
        length: '15"'
      }
    ]
  },
  {
    id: 9,
    surname: 'Silver',
    slug: 'ms-silver',
    gender: 'female',
    birthday: 'March 20, 2018',
    accentColor: 'rgba(228, 222, 197, 0.8)',
    get prefix () {
      return this.gender === 'female' ? 'Ms.' : 'Mr.'
    },
    get prefixedName () {
      return this.prefix + ' ' + this.surname
    },
    get ageText () {
      return _ageText(this)
    },
    image: require('@/assets/photos/puppy_0005_ms-silver-01.jpg'),
    taken: true,
    growthData: [
      {
        date: moment('March 31, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '1lb 8oz',
        length: '11"'
      },
      {
        date: moment('April 6, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '2lbs 9oz',
        length: '14"'
      },
      {
        date: moment('April 15, 2018', 'MMMM D, YYYY').calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM DD'
        }),
        weight: '4lbs 1oz',
        length: '15.5"'
      }
    ]
  }
]

const puppyService = {
  getPuppies () {
    return contentful.fetchContent()
      .then(res => {
        return shuffle(res.map(_pup => new Puppy(_pup)))
      })
      .catch(err => {
        window.console.log('Problem retrieving those puppies:\n', err)
        return shuffle(_staticPuppies.map(_pup => new Puppy(_pup)))
      })
  },
  getParents () {
    return contentful.fetchContent({
      content_type: 'parent',
      include: 10
    })
      .then(res => {
        return res.map(_parent => new Puppy(_parent))
      })
      .catch(err => {
        window.console.log('Poodle/Retriever retrieval err:\n', err)
      })
  }
}

export default puppyService

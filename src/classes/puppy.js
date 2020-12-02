import moment from 'moment'
import fontColorContrast from 'font-color-contrast'

export default class Puppy {
  constructor (data) {
    Object.assign(this, data.fields)
    this.id = data.sys.id
    if (data.fields.gender) {
      this.pronoun = data.fields.gender === 'female' ? 'she' : 'he'
    }
    if (data.fields.birthday) {
      this.birthday = moment(data.fields.birthday)
      this.formattedBirthday = this.birthday.format('MMMM D, YYYY')
    }
    if (data.fields.accentColor) {
      const rgb = data.fields.accentColor.replace(/(^rgb\(|\)$)/g, '')
      const rgbOpaque = rgb.split(',').map(v => Math.floor(parseInt(v) + (255 - parseInt(v)) * 0.25)).join(', ')
      if (rgb) {
        this.accentColor = 'rgba(' + rgb + ', 0.8)'
        this.contrastColor = fontColorContrast(rgb.split(','))
        this.accentColorOpaque = 'rgb(' + rgbOpaque + ')'
      } else {
        // Assumed to be Hex
        this.accentColor = 'rgba(' + data.fields.accentColor + ', 0.8)'
        this.contrastColor = fontColorContrast(data.fields.accentColor)
        this.accentColorOpaque = data.fields.accentColor
      }
    }
    if (data.fields.traits) this.traits = data.fields.traits
    if (data.fields.growthDatapoints) {
      this.growth = data.fields.growthDatapoints.map(datum => {
        return {
          date: moment(datum.fields.date).calendar(null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MMMM DD'
          }),
          weight: datum.fields.weight,
          length: datum.fields.length
        }
      })
    }
  }
  get ageText () {
    let _age = this.birthday.toNow(true)
    return `${this.name} is just ${_age} old, born ${this.formattedBirthday}.`
  }
}

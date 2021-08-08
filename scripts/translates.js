const glob = require('glob')
const fs = require('fs-extra')

const config = require('../locales.config.json')

const source = config.source || '**/i18n/'
const target = config.target || 'core/locales/'
const langs = config.langs || ['es']

copyFiles()

function copyFiles() {
  langs.forEach(lang => {
    const files = searchForFiles(`${source}${lang}.json`)
    const mainObj = files.reduce((acu, file) => {
      const obj = fs.readFileSync(file)
      const i18n = flattenObj(JSON.parse(obj.toString()))
      return Object.assign(acu, i18n)
    }, {})
    fs.outputFile(`${target}${lang}.json`, JSON.stringify(mainObj))
  })
}

function searchForFiles(pattern) {
  return glob.sync(pattern)
}

function flattenObj(data) {
  var result = {}
  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) recurse(cur[i], prop + '[' + i + ']')
      if (l == 0) result[prop] = []
    } else {
      var isEmpty = true
      for (var p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) result[prop] = {}
    }
  }
  recurse(data, '')
  return result
}

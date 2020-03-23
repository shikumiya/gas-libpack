// https://www.npmjs.com/package/cheerio
var cheerio = require("cheerio")
// https://www.npmjs.com/package/zlibjs
var unzip = require("zlibjs/bin/unzip.min")
// https://www.npmjs.com/package/encoding-japanese
var encoding_jp = require("encoding-japanese")

global.cheerio = function() {
  return cheerio;
}

global.unzip = function() {
  return unzip;
}

global.encoding = function() {
  return encoding_jp;
}

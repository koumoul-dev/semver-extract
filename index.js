#!/usr/bin/env node

const path = require('path')
const semver = require('semver')

const program = require('commander')

program
  .usage('[options] <version>')
  .option('--major', 'Extract major version')
  .option('--minor', 'Extract minor version')
  .option('--patch', 'Extract minor version')
  .option('--pjson', 'Read the version number from ./package.json instead of the <version> argument')
  .option('-x', 'Add "x" after truncated version')
  .parse(process.argv)

if (!process.argv.slice(2).length) program.outputHelp();

// Input is either coming from the arguments or read in the local package.json file
let rawVersion = program.args[0]
if (program.pjson) rawVersion = require(path.resolve(process.cwd(), 'package.json')).version

const v = semver.coerce(rawVersion)
if (!v) throw new Error(`The input version ${rawVersion} cannot be coerced to semver`)

if (program.major) {
  if (program.X) process.stdout.write(`${v.major}.x`)
  else process.stdout.write(`${v.major}`)
}
else if (program.minor) {
  if (program.X) process.stdout.write(`${v.major}.${v.minor}.x`)
  else process.stdout.write(`${v.major}.${v.minor}`)
}
else process.stdout.write(v.version)

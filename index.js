#!/usr/bin/env node

const path = require('path')
const program = require('commander')
const extract = require('./extract')

program
  .usage('[options] <version>')
  .option('--major', 'Extract major version')
  .option('--minor', 'Extract minor version')
  .option('--patch', 'Extract minor version')
  .option('--branch', 'Accept a branch name. Meaning that a string not coerced to a semver version will be returned as it is.')
  .option('--pjson', 'Read the version number from ./package.json instead of the <version> argument')
  .option('-x', 'Add "x" after truncated version')
  .parse(process.argv)

if (!process.argv.slice(2).length) program.outputHelp();

// Input is either coming from the arguments or read in the local package.json file
let rawVersion = program.args[0]
if (program.pjson) rawVersion = require(path.resolve(process.cwd(), 'package.json')).version

// Better for input from GITHUB_REF env var
if (rawVersion.startsWith('refs/heads/')) rawVersion = rawVersion.replace('refs/heads/', '')

process.stdout.write(extract(rawVersion, program))

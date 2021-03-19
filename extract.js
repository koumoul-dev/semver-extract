const semver = require('semver')

module.exports = (rawVersion, params) => {
  const v = semver.coerce(rawVersion)
  if (!v) {
    if (params.branch) return rawVersion
    throw new Error(`The input version ${rawVersion} cannot be coerced to semver`)
  }

  if (params.major) {
    if (params.X) return `${v.major}.x`
    return `${v.major}`
  }
  if (params.minor) {
    if (params.X) return `${v.major}.${v.minor}.x`
    return `${v.major}.${v.minor}`
  }
  return v.version
}

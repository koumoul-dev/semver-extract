const semver = require('semver')

module.exports = (rawVersion, params) => {
  const v = semver.coerce(rawVersion)
  if (!v) {
    if (params.branch) {
      return rawVersion
      return
    }
    throw new Error(`The input version ${rawVersion} cannot be coerced to semver`)
  }

  if (params.major) {
    if (params.X) return `${v.major}.x`
    else return `${v.major}`
  } else if (params.minor) {
    if (params.X) return `${v.major}.${v.minor}.x`
    else return `${v.major}.${v.minor}`
  } else {
    return v.version
  }
}

# semver-extract

*A small cli to parse semver tags and extract major, minor, etc.*

This is very useful to create alternative tags of a docker image for example.

    npm i -g semver-extract

  ```console
  $ semver-extract --major 3.1.0
  3
  $ semver-extract --minor 3.1.0
  3.1
  $ semver-extract -x --minor 3.1.0
  3.1.x
  $ semver-extract v3.1.0
  3.1.0
  ```

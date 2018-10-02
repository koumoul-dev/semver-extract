# semver-extract

*A small cli to parse semver tags and extract major, minor, etc.*

    npm i -g @koumoul/semver-extract

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

const path = require("path")
const fs = require("fs/promises")

const SWAGGER_FOLDER = "Core"
const SWAGGER_URL = "https://core.doubledot.fun/docs-json"

function bootstrap() {
  const dir = path.join(path.resolve())
  const swagger = path.join(
    dir,
    "src",
    "services",
    "swagger",
    SWAGGER_FOLDER,
    "swagger.json"
  )
  fetch(SWAGGER_URL).then((res) => {
    if (!res.ok) return
    res.json().then((json) => {
      const text = JSON.stringify(json, null, 2)
      fs.rm(swagger)
        .catch(() => {})
        .finally(() => {
          fs.writeFile(swagger, text).then(() => {
            console.log("🐍 ~ Done!")
          })
        })
    })
  })
}

void bootstrap()

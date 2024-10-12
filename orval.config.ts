import { defineConfig } from "orval"

const config = defineConfig({
  Core: {
    input: {
      target: "src/services/swagger/Core/swagger.json"
    },
    output: {
      target: "src/services/swagger/Core/hooks",
      schemas: "src/services/swagger/Core/models",
      //
      mock: false,
      clean: true,
      client: "react-query",
      override: {
        useTypeOverInterfaces: true,
        query: {
          useInfinite: false,
          useSuspenseQuery: true
        },
        mutator: {
          name: "coreMutator",
          path: "src/services/swagger/Core/mutator.ts"
        }
      }
    }
  }
})

export default config

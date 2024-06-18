import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [process.env.GQL_URL!],
  documents: [
    "./src/graphql/fragments/**/*.ts",
    "./src/graphql/query/**/*.ts",
    "./src/graphql/mutation/**/*.ts",
    "./src/graphql/subscription/**/*.ts",
    "./src/**/*/gql.ts",
    "./src/**/*/*.gql.ts",
    "!./src/**/*.graphql.ts",
  ],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

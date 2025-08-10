import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import prettierConfig from "eslint-config-prettier"
import importPlugin from "eslint-plugin-import"
import prettierPlugin from "eslint-plugin-prettier"
import unusedImports from "eslint-plugin-unused-imports"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: importPlugin, // ⬅️ 여기서 직접 등록
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "prettier/prettier": "error",
      "unused-imports/no-unused-imports": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [{ pattern: "@/**", group: "internal", position: "after" }],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "never",
        },
      ],
    },
  },
  prettierConfig,
]

export default eslintConfig

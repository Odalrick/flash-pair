/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const { pathsToModuleNameMapper } = require("ts-jest")
const { compilerOptions } = require("./tsconfig.json")
module.exports = {
  coverageProvider: "v8",
  preset: "ts-jest",
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}

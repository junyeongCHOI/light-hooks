import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".js"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.js",
  plugins: [
    external(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({ extensions, include: ["src/**/*"], runtimeHelpers: true }),
  ],
  output: [
    {
      file: pkg.module,
      format: "es",
    },
  ],
};

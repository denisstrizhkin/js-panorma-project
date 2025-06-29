import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const pages = ["index.js"];

const export_page = pages.reduce((acc, item) => {
  acc.push({
    input: `./${item}`,
    output: {
      file: `../release/js/${item}`,
      format: "cjs",
      sourcemap: "inline",
    },
    plugins: [babel({ babelHelpers: "bundled" }), resolve()],
  });
  return acc;
}, []);

export default export_page;

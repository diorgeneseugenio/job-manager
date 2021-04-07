module.exports = (api) => {
  if (api.env("test")) {
    api.cache(true);

    return {
      presets: [
        [
          "@babel/preset-typescript",
          {
            isTSX: true,
            allExtensions: true,
            allowNamespaces: true,
          },
        ],
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            targets: { node: "current", esmodules: true },
            modules: false,
          },
        ],
      ],
      plugins: [
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-typescript",
        "@babel/plugin-transform-modules-commonjs",
      ],
    };
  }

  api.cache(true);
  return {
    presets: ["next/babel"],
    env: {
      production: {
        plugins: [["react-remove-properties", { properties: ["data-testid"] }]],
      },
    },
  };
};

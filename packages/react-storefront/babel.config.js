module.exports = function(api) {
  api.cache(true);
  return {
    "presets": [
      ["@babel/env", {
        "targets": {
          "browsers": "> 1%"
        },
        "useBuiltIns": "usage",
        "forceAllTransforms": true,
        "modules": false
      }],
      "@babel/react"
    ],
    "env": {
      "production": {
        "presets": ["minify"]
      },
      "test": {
        "presets": [
          ["@babel/env", {
            "targets": {
              "browsers": "> 1%"
            },
            "useBuiltIns": "usage",
            "forceAllTransforms": true
          }],
          "@babel/react"
        ]
      }
    },
    "plugins": [
      ["@babel/plugin-transform-runtime", {
        "regenerator": true
      }],
      "@babel/plugin-transform-async-to-generator",
      ["@babel/plugin-proposal-decorators", {
        "legacy": true
      }],
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties"
    ]
  };
}

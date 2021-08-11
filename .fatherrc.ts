export default {
  esm: 'babel',
  cjs: 'babel',
  extraBabelPlugins:[
    [
      "file-loader",
      {
        "name": "[hash].[ext]",
        "extensions": ["png", "jpg", "jpeg", "gif", "svg"],
        "publicPath": "/public",
        "outputPath": "/public",
        "context": "",
        "limit": 0
      }
    ]
  ]
};

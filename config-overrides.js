const {
    override,
    addDecoratorsLegacy,
    addLessLoader,
    fixBabelImports
} = require('customize-cra')

// 主题配置文件
const modifyVars = require('./theme')

module.exports = override(
    // 按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // style改成true,才能使用less
        style: true,
    }),
    // less-loader
    addLessLoader({
        javascriptEnabled: true,
        modifyVars,
    }),
    // 装饰器
    addDecoratorsLegacy()
)


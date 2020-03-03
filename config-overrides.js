const {
    override,
    addDecoratorsLegacy,
    addLessLoader,
    fixBabelImports
} = require('customize-cra')

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
        modifyVars: {
            '@primary-color': '#3276c3'
        }
    }),
    // 装饰器
    addDecoratorsLegacy()
)


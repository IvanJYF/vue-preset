module.exports = (api, options, rootOptions) => {
    console.log(options)
    api.extendPackage({
        devDependencies: {
            "@vue/cli-plugin-babel": "^3.0.3",
            "@vue/cli-plugin-eslint": "^3.0.3",
            "@vue/cli-service": "^3.0.3",
            "babel-plugin-component": "^1.1.1",
            "babel-polyfill": "^6.26.0",
            "es6-promise": "^4.2.8",
            "node-sass": "^4.12.0",
            "sass-loader": "^8.0.0",
            "vue-cli-plugin-element": "^1.0.1",
            "vue-template-compiler": "^2.6.10"
        },
        "dependencies": {
            "axios": "^0.19.0",
            "element-ui": "^2.13.0",
            "vuex": "^3.0.1",
            "echarts": "^4.6.0",
        },
    });
    api.render('./template/common')
    api.render('./template/pc')
}
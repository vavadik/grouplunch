module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.resolve.extensions = ['*', '.js', '.vue', '.json'];
        } else {
            config.resolve.extensions = ['*', '.js', '.vue', '.json'];
        }
    }
}
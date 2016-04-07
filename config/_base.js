// 'use strict';
const config = {
    env: process.env.NODE_ENV || 'development',
    __DEV__:process.env.NODE_ENV !== 'production',
    cookie: {
        expire: 89
    },
    // ----------------------------------
    // Server Configuration
    // ----------------------------------
    server_host: 'localhost',
    server_port: process.env.PORT || 3001,
    // ----------------------------------
    // Compiler Configuration
    // ----------------------------------
    compiler_css_modules     : true,
    compiler_devtool         : 'source-map',
    compiler_hash_type       : 'hash',
    compiler_fail_on_warning : false,
    compiler_quiet           : false,
    compiler_public_path     : '',
    compiler_stats           : {
        chunks : false,
        chunkModules : false,
        colors : true
    },
    compiler_vendor : [
        'history',
        'react',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux'
    ],
}
module.exports = config;

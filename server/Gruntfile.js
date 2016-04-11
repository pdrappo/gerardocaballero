
// Generated on 2016-02-26 using generator-angular 0.12.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    php: {
        dist: {
            options: {
                hostname: '127',
                port: 8000,
                base: 'data', // Project root
                keepalive: true,
                open: false
            }
        }
    }
});

grunt.registerTask('default', ['php']);
}
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
          test: {
            options: {
              reporter: 'spec',
              //captureFile: 'results.txt', // Optionally capture the reporter output to a file
              quiet: false, // Optionally suppress output to standard out (defaults to false)
              clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
              ui: 'tdd'
            },
            src: ['test/**/*.js']
          }
        }
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-mocha'); Client Side testing
    grunt.loadNpmTasks('grunt-mocha-test');


    // Default task(s).
    grunt.registerTask('default', ['mochaTest']);

    //Test
    grunt.registerTask('test', ['mochaTest']);


};

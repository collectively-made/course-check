'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Tracks build times
  require('time-grunt')(grunt);

  // Set a config variable
  var appConfig = {
    paths: {
      app: 'app',
      dist: 'dist',
      test: 'test'
    }
  };

  // Set up some sensible defaults for our tasks
  grunt.initConfig({
    appConfig: appConfig,
    /**
     * Watch
     * =====
     * Run this task to watch for app file changes and run appropriate build tasks.
     */
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: [
          '<%= appConfig.paths.app %>/scripts/{,*/}*.js'
        ]
      },
      compass: {
        files: ['<%= appConfig.paths.app %>/styles/**/*.{scss,sass}'],
        tasks: ['compass:server']
      }
    },

    /**
     * BrowserSync
     * ===========
     * Run this task to start a local HTTP server.
     */
    browserSync: {
      bsFiles: {
        src: [
          '<%= appConfig.paths.app %>/index.html',
          '<%= appConfig.paths.app %>/common/**/*.js',
          '<%= appConfig.paths.app %>/features/**/*.js'
        ]
      },
      options: {
        // https: true,
        watchTask: true,
        server: {
          baseDir: '<%= appConfig.paths.app %>'
        }
      }
    },

    /**
     * Clean
     * =====
     * Empties out directories and certain files in between tasks.
     */
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= appConfig.paths.dist %>/{,*/}*',
            '!<%= appConfig.paths.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    /**
     * Bump
     * ====
     * Run this task to keep version numbers in sync across JSON files.
     */
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: false,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json'],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false
      }
    },

    /**
     * WireDep
     * =======
     * Automatically injects bower components into index.html.
     */
    wiredep: {
      app: {
        src: [
          appConfig.paths.app + '/index.html'
        ],
        fileTypes: {
          html: {
            detect: {
              html: /<link.*href=['"]([^'"]+)/gi
            },
            replace: {
              html: '<link rel="import" href="{{filePath}}" />'
            }
          }
        }
      },
      test: {
        devDependencies: true,
        src: [ appConfig.paths.test + '/karma.conf.js' ],
        ignorePath: /\.\.\//,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },

    /**
     * Compass
     * =======
     * Compile SCSS to CSS.
     */
    compass: {
      options: {
        sassDir: '<%= appConfig.paths.app %>/styles/src',
        cssDir: '<%= appConfig.paths.app %>/styles/dist',
        noLineComments: true
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        }
      },
      server: {
        options: {
          debugInfo: false
        }
      }
    },

    /**
     * Karma
     * =======
     * Runs tests
     */
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  /**
   * Grunt Tasks
   * ===========
   * The following are a list of tasks that can be run to aid in the development process.
   */

  // Set up a default task
  grunt.registerTask('default', [
    'wiredep'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'karma'
  ]);

  grunt.registerTask('serve', [
    'clean:server',
    'wiredep',
    'browserSync',
    'watch'
  ]);
};

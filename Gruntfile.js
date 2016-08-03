module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            js: {
                files: {
                    'dist/pascal.bundle.min.js': ['dist/pascal.bundle.js'],
                    'dist/app.templates.min.js': ['dist/app.templates.js']
                },
                options: {
                    preserveComments: false
                }
            }
        },
        concat: {
            js: {
                src: [
					'bower_components/angular/angular.min.js',
                    'bower_components/ngstorage/ngStorage.min.js',
				],
                dest: 'dist/pascal-vendor.bundle.min.js',
                stripBanners: {
                    options: {
                        block: true,
                        line: true
                    }
                }
            },
            ngjs: {
                src: [
					'app/app.annotated.js',
					'app/ng-controllers/*.annotated.js',
					'app/ng-directives/*.annotated.js',
					'app/ng-services/*.annotated.js',
					'app/ng-filters/*.annotated.js',
				],
                dest: 'dist/pascal.bundle.js',
            },
            alljs: {
                src: [
                    'dist/pascal-vendor.bundle.min.js',
                    'dist/pascal.bundle.min.js',
                    'dist/app.templates.min.js'
                ],
                dest: 'dist/pascal-all.min.js',
            }
        },
        ngAnnotate: {
            options: {
                // Task-specific options go here.
            },
            dist: {
                files: [
                    {
                        expand: true,
                        src: ['app/app.js', 'app/ng-controllers/*.js', 'app/ng-directives/*.js', 'app/ng-filters/*.js', 'app/ng-services/*.js'],
                        ext: '.annotated.js', // Dest filepaths will have this extension.
                        extDot: 'last', // Extensions in filenames begin after the last dot
					},
				],
            },
        },

		clean: [
			'app/app.annotated.js',
			'app/ng-controllers/*.annotated.js',
			'app/ng-directives/*.annotated.js',
			'app/ng-services/*.annotated.js',
			'app/ng-filters/*.annotated.js',
			'dist/pascal-vendor.bundle.min.js',
			'dist/pascal.bundle.min.js',
			'dist/app.templates.min.js',
			'dist/pascal.bundle.js',
			'dist/app.templates.js'
		],
        watch: {
            scripts: {
                files: ['app/**/*.js', 'app/templates/**/*.html', 'index.html'],
                tasks: ['tasks'],
                options: {
                    spawn: false,
                },
            },
        },
        notify: {
            watch: {
                options: {
                    message: 'Grunt Task Completed', // optional
                }
            }
        },

        ngtemplates: {
            app: {
                cwd: 'app',
                src: 'templates/**/**.html',
                dest: 'dist/app.templates.js',
                options: {
                    module: 'PascalExam',
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true,
                        removeComments: true
                    }
                }
            }
        }
    });


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.loadNpmTasks('grunt-notify');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');


	grunt.registerTask('tasks', ['ngtemplates', 'concat:js', 'ngAnnotate:dist', 'concat:ngjs', 'uglify:js', 'concat:alljs', 'clean', 'notify:watch']);


    grunt.registerTask('default', ['tasks', 'watch']);
};
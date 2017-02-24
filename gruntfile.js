/*
 **	gruntfile.js for automating project task.
 *	Tasks : Copying, Concatination, Minification, Watch, Less conversion, browser synchronization
 */


"use strict";

//Exporting project level automation configuration
module.exports = function (grunt) {

	grunt.initConfig({
		copy: {
			dist: {
				src: ["src/asset/css/*"],
				dest: "dist/"
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false,
				},
			},
		},
		less: {
			dev: {
				options: {
					compress: false, // Compress output by removing some whitespaces.
					optimization: 2, // Set the parser's optimization level. The lower the number, the less nodes it will create in the tree. 
					ieCompat: true // Enforce the CSS output is compatible with Internet Explorer 8.
				},
				files: {
					"src/assets/css/style.css": "src/assets/css/style.less", // destination file and source file
					"src/app/header/header.component.css": "src/app/header/header.component.less",
					"src/app/footer/footer.component.css": "src/app/footer/footer.component.less",
					"src/app/main/main.component.css": "src/app/main/main.component.less"
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.task.registerTask("build", ["less"]);

}
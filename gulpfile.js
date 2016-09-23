var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');

var jsSources = ['assets/javascript/*.js'];
var sassSources = ['assets/sass/stylesheet.scss'];
var htmlSources = ['*.html'];

gulp.task('js', function(){
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	//.pipe(browserify())
	.pipe(gulp.dest('assets/js'))
	.pipe(connect.reload());
	});

gulp.task('compass', function(){
	gulp.src(sassSources)
	.pipe(compass({
		sass: 'assets/sass',
        css: 'public/stylesheets',
		image: 'images',
		style: 'compressed',
		require: ['modular-scale']
	}))
		.on('error', gutil.log)
	.pipe(gulp.dest('public/stylesheets'))
	.pipe(connect.reload());
	});

gulp.task('watch', function(){
	gulp.watch('assets/sass/**/*.scss',['compass']);
	gulp.watch(jsSources, ['js']);
	gulp.watch(htmlSources, ['html']);
	});

gulp.task('connect', function(){
	connect.server({
		root: '',
		livereload: true
		});
	});

gulp.task('html', function(){
	gulp.src(htmlSources)
	.pipe(connect.reload());
	});

gulp.task('default', ['html', 'js','compass', 'watch', 'connect']);

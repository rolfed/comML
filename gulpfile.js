var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
    nodemon = require('gulp-nodemon')
    jade = require('gulp-jade');

var jsSources = ['assets/javascripts/*.js'];
var sassSources = ['assets/sass/stylesheet.scss'];
var htmlSources = ['*.html'];


gulp.task('jade', function() {
      return gulp.src('views/**/*.jade')
          .pipe(jade({
            pretty: true
          })) // pip to jade plugin

          .pipe(gulp.dest('public/views')); // tell gulp our output folder
});

gulp.task('js', function(){
	return gulp.src(jsSources)
      .pipe(concat('../../public/javascript/app.js'))
      .pipe(browserify())
      .pipe(gulp.dest('public/javascript'))
      .pipe(connect.reload());
	});

gulp.task('compass', function(){
   gulp.src(sassSources)
	.pipe(compass({
		sass: 'assets/sass',
        css: 'public/stylesheets',
		image: 'images',
		style: 'compressed',
	}))
		.on('error', gutil.log)
	.pipe(gulp.dest('public/stylesheets'))
	.pipe(connect.reload());
	});

gulp.task('watch', function(){
    gulp.watch('views/*.jade', ['jade']);
	gulp.watch('assets/sass/**/*.scss',['compass']);
	gulp.watch(jsSources, ['js']);
	gulp.watch(htmlSources, ['html']);
	});

gulp.task('start', function () {
    nodemon({
         script: 'app.js',
         ext: 'js html',
         env: { 'NODE_ENV': 'development' }
        });
});


gulp.task('html', function(){
	gulp.src(htmlSources)
	.pipe(connect.reload());
	});

gulp.task('default', ['jade', 'html', 'js','compass', 'watch', 'start']);

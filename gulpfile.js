{
	var gulp = require('gulp');
	var minifyCSS = require('gulp-minify-css');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');

	// โหลด package "browser-sync" มาใช้ (บรรทัดนี้ต้องใส่เวลาติดตั้ง plugin เสริม)
	var browserSync = require('browser-sync');

	// สร้าง task ชื่อว่า "browser-sync" ขึ้นมา พร้อมกับระบุงานที่จะให้ task นี้ทำ
	gulp.task('browser-sync', function() {
	    browserSync({
	        server: {
	            baseDir: "./"
	        }
	    });
	});

	  gulp.task('css' ,function() {
	      return gulp
	          .src('vendors/**/*.css')    // ไฟล์ที่ต้องการ minify
	          .pipe(minifyCSS())  // สั่ง execute minifyCSS
	          .pipe(concat('custom.min.css'))
	          .pipe(gulp.dest('public/css')); // dest : คือโฟลเดอร์ที่ต้องการเซฟ
	  });
	  gulp.task('js', function() {
	      return gulp
	          .src('vendors/**/*.js')         // ไฟล์ที่ต้องการ uglify()
	          .pipe(uglify())         // สั่ง execute uglify()
	          .pipe(concat('custom.min.js'))
	          .pipe(gulp.dest('public/js'));     // โฟลเดอร์ที่ต้องการเซฟ
	  });
	  gulp.task('watch', function() {
	    gulp.watch('vendors/**/*.css', ['css']);
	    gulp.watch('vendors/**/*.js', ['js']);
	  });

	gulp.task('default', ['browser-sync','watch'], function() {
    // ระบุว่า default task ทำอะไร (ไม่ต้องใส่ก็ได้ เพราะเราต้องการจะให้ทำ taskName1, taskName2, taskName3)
    // เมื่อไฟล์ html หรือ css มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
    gulp.watch(['*.html'], browserSync.reload);
    gulp.watch(['*.php'], browserSync.reload);
    gulp.watch(['css/*.css'], browserSync.reload);
	});
}

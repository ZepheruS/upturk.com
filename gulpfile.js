{
	var gulp = require('gulp');
 
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


	gulp.task('default', ['browser-sync'], function() {
    // ระบุว่า default task ทำอะไร (ไม่ต้องใส่ก็ได้ เพราะเราต้องการจะให้ทำ taskName1, taskName2, taskName3)
    // เมื่อไฟล์ html หรือ css มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
    gulp.watch(['*.html'], browserSync.reload);
    gulp.watch(['*.php'], browserSync.reload);
    gulp.watch(['css/*.css'], browserSync.reload);
	});
}
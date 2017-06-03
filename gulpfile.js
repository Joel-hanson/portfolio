var gulp = require('gulp');
var sync = require('browser-sync').create();

gulp.task('serve',function(){
sync.init({
server:{
baseDir:'./'
},
})
gulp.watch('./*/*.*').on('change',sync.reload);
gulp.watch('./*.*').on('change',sync.reload);

});

var gulp = require('gulp')
    nodemon = require('gulp-nodemon');

//Gulp will now be in charge of restarting our server
//will restart upon noticing changes in javaScript files. 
gulp.task('default',function(){
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT:8000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart',function(){
    console.log("Restarting");
  });
});

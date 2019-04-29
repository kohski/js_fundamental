module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      myTask: {
        files: {
          'scripts/app.min.js':
          [
            'src/Member.js',
            'src/MyArea.js',
            'src/MyStrage.js'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['uglify']);
}
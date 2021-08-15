var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
  
      // Next, add your custom code
      this.option('babel'); // This method adds support for a `--babel` flag
      console.log('distil constructor')
    }
    method2() {
      this.log('method 2 just ran');
    }
    method1() {
      this.log('method 1 just ran');
    }
    _method1() {
      this.log('method 3 just ran');
    }
    // writing() {
    //   const pkgJson = {
    //     devDependencies: {
    //       eslint: '^3.15.0'
    //     },
    //     dependencies: {
    //       react: '^16.2.0'
    //     }
    //   };
  
    //   // Extend or create package.json file in destination path
    //   this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    // }
  
    // install() {
    //   this.npmInstall();
    // }
    writing() {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('public/index.html'),
        { title: 'distil' }
      );
    }
};

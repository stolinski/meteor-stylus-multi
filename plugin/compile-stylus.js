var Future = Npm.require('fibers/future');
var stylus = Npm.require('stylus');
var nib = Npm.require('nib');
var jeet = Npm.require('jeet');
var rupture = Npm.require('rupture');
var axis = Npm.require('axis');
var platonic = Npm.require('stylus-platonic');
var path = Npm.require('path');

Plugin.registerSourceHandler("styl", {archMatching: 'web'}, function(compileStep) {
  var f = new Future;
  stylus(compileStep.read().toString('utf8'))
    .use(nib())
    .use(jeet())
    .use(axis())
    .use(rupture())
    .use(platonic())
    .set('filename', compileStep.inputPath)
    // Include needed to allow relative @imports in stylus files
    .include(path.dirname(compileStep._fullInputPath))
    .render(f.resolver());

  try {
    var css = f.wait();
  } catch (e) {
    compileStep.error({
      message: "Stylus compiler error: " + e.message
    });
    return;
  }
  compileStep.addStylesheet({
    path: compileStep.inputPath + ".css",
    data: css
  });
});

// Register import.styl files with the dependency watcher, without actually
// processing them. There is a similar rule in the less package.
Plugin.registerSourceHandler("import.styl", function () {
  // Do nothing
});

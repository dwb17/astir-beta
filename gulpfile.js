// Generated on 2015-05-04 using generator-jekyllized 0.7.3
"use strict";

var gulp = require("gulp");
// Loads the plugins without having to list all of them, but you need
// to call them as $.pluginname
var $ = require("gulp-load-plugins")();
// "del" is used to clean out directories and such
var del = require("del");
// BrowserSync isn"t a gulp package, and needs to be loaded manually
var browserSync = require("browser-sync");
// merge is used to merge the output from two different streams into the same stream
var merge = require("merge-stream");
// Need a command for reloading webpages using BrowserSync
var reload = browserSync.reload;
// And define a variable that BrowserSync uses in it"s function
var bs;

var util = require("gulp-util");
var source = require("vinyl-source-stream");
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var ftp = require( 'vinyl-ftp' );


/** Configuration **/
var user = process.env.FTP_USER;
var password = process.env.FTP_PWD;
var host = '138.201.37.149';
var port = 21;
var localFilesGlob = ['./site/**/*'];
var remoteFolder = '/public_html'

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
    return ftp.create({
        host: host,
        port: port,
        user: user,
        password: password,
        parallel: 5,
        log: util.log
    });
}

/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
gulp.task('ftp-deploy', function() {

    var conn = getFtpConnection();

    return gulp.src(localFilesGlob, { base: './site', buffer: false })
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files
        .pipe( conn.dest( remoteFolder ) )
    ;
});


// Deletes the directory that is used to serve the site during development
gulp.task("clean:dev", del.bind(null, ["serve"]));

// Deletes the directory that the optimized site is output to
gulp.task("clean:prod", del.bind(null, ["site"]));

// Runs the build command for Jekyll to compile the site locally
// This will build the site with the production settings
gulp.task("jekyll:dev", $.shell.task("bundle exec jekyll build"));
gulp.task("jekyll-rebuild", ["jekyll:dev", "js"], function () {
  reload;
});

// Almost identical to the above task, but instead we load in the build configuration
// that overwrites some of the settings in the regular configuration so that you
// don"t end up publishing your drafts or future posts
gulp.task("jekyll:prod", $.shell.task("bundle exec jekyll build --config _config.yml,_config.build.yml"));

// Compiles the SASS files and moves them into the "assets/stylesheets" directory
gulp.task("styles", function () {
  // Looks at the style.scss file for what to include and creates a style.css file
  return gulp.src("src/assets/scss/style.scss")
    //.pipe($.sourcemaps.init())
    .pipe($.sass({outputStyle: 'compressed'}))
    // AutoPrefix your CSS so it works between browsers
    .pipe($.autoprefixer("last 2 version", { cascade: true }))
    // Source maps
    //.pipe($.sourcemaps.write())
    // Directory your CSS file goes to
    .pipe(gulp.dest("src/assets/stylesheets/"))
    .pipe(gulp.dest("serve/assets/stylesheets/"))
    .pipe(gulp.dest("site/assets/stylesheets/"))
    // Outputs the size of the CSS file
    .pipe($.size({title: "styles"}))
    // Injects the CSS changes to your browser since Jekyll doesn"t rebuild the CSS
    .pipe(reload({stream: true}));
});

gulp.task("js", function() {
  gulp.src('./src/assets/javascript/*.js')
    .pipe(gulp.dest("site/assets/javascript/"));
});



gulp.task("video", function() {
  gulp.src('./src/assets/video/**')
    .pipe(gulp.dest("site/assets/video/"));
});

gulp.task("canvas", function() {
  $.shell.task('cp -af ./src/assets/canvas/ ./site/assets/canvas/');
  $.shell.task('cp -af ./src/assets/canvas/ ./serve/assets/canvas/');
});

gulp.task("phpmailer", function() {
  gulp.src('./src/PHPMailer/**')
    .pipe(gulp.dest("site/PHPMailer/"));
});

// Optimizes the images that exists
gulp.task("images", function () {
  return gulp.src("src/images/**")
    .pipe($.changed("site/images"))
    .pipe($.imagemin({
      // Lossless conversion to progressive JPGs
      progressive: true,
      // Interlace GIFs for progressive rendering
      interlaced: true
    }))
    .pipe(gulp.dest("site/images"))
    .pipe($.size({title: "images"}));
});

// Copy over fonts to the "site" directory
gulp.task("fonts", function () {
  return gulp.src("src/assets/fonts/**")
    .pipe(gulp.dest("site/assets/fonts"))
    .pipe(gulp.dest("serve/assets/fonts"))
    .pipe($.size({ title: "fonts" }));
});

// Copy over vendors to the "site" directory
gulp.task("vendors", function () {
  return gulp.src("src/assets/javascript/vendors/**")
    .pipe(gulp.dest("site/assets/javascript/vendors"))
    .pipe($.size({ title: "vendors" }));
});

// Copy xml and txt files to the "site" directory
gulp.task("copy", function () {
  return gulp.src(["serve/*.txt", "serve/*.php", "serve/*.xml"])
    .pipe(gulp.dest("site"))
    .pipe($.size({ title: "xml & txt & php" }))
});

gulp.task("cname", function () {
  return gulp.src(["serve/CNAME"])
    .pipe(gulp.dest("site"))
    .pipe($.size({ title: "CNAMe" }))
});


// Optimizes all the CSS, HTML and concats the JS etc
gulp.task("html", ["styles"], function () {
  var assets = $.useref.assets({searchPath: "serve"});

  return gulp.src("serve/**/*.html")
    .pipe(assets)
    // Concatenate JavaScript files and preserve important comments
    //.pipe($.if("*.js", $.uglify({preserveComments: "some"})))
    // Minify CSS
    .pipe($.if("*.css", $.minifyCss()))
    // Start cache busting the files
    //.pipe($.revAll({ ignore: [".eot", ".svg", ".ttf", ".woff"] }))
    //.pipe(assets.restore())
    // Conctenate your files based on what you specified in _layout/header.html
    //.pipe($.useref())
    // Replace the asset names with their cache busted names
    //.pipe($.revReplace())
    // Minify HTML
    .pipe($.if("*.html", $.htmlmin({
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeCDATASectionsFromCDATA: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      keepClosingSlash: true
    })))
    // Minify inline JS and CSS
    .pipe($.if("*.html", $.minifyInline()))
    // Send the output to the correct folder
    .pipe(gulp.dest("site"))
    .pipe($.size({title: "optimizations"}));
});


// Task to upload your site to your personal GH Pages repo
gulp.task("deploy", function () {
  // Deploys your optimized site, you can change the settings in the html task if you want to
  return gulp.src("./site/**/*")
    .pipe($.ghPages({
      // Currently only personal GitHub Pages are supported so it will upload to the master
      // branch and automatically overwrite anything that is in the directory
      cacheDir: "./.tmp"
      }));
});

// Run JS Lint against your JS
gulp.task("jslint", function () {
  gulp.src("./serve/assets/javascript/*.js")
    // Checks your JS code quality against your .jshintrc file
    .pipe($.jshint(".jshintrc"))
    .pipe($.jshint.reporter());
});

// Runs "jekyll doctor" on your site to check for errors with your configuration
// and will check for URL errors a well
gulp.task("doctor", $.shell.task("bundle exec jekyll doctor"));


// BrowserSync will serve our site on a local server for us and other devices to use
// It will also autoreload across all devices as well as keep the viewport synchronized
// between them.
gulp.task("serve:dev", ["styles", "jekyll:dev", "fonts", "scripts-opt", "scripts-opt-bideo"], function () {
  bs = browserSync({
    notify: true,
    //proxy: 'http://astir.ninja',
    open: false,
    // tunnel: "",
    server: {
      baseDir: "serve",
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  });
});

// These tasks will look for files that change while serving and will auto-regenerate or
// reload the website accordingly. Update or add other files you need to be watched.
gulp.task("watch", function () {
  gulp.watch(["src/**/*.md", "src/**/*.html", "src/**/*.xml", "src/**/*.txt", "src/**/*.js"], ["jekyll-rebuild", reload]);
  gulp.watch(["serve/assets/stylesheets/*.css"], reload({stream: true}));
  gulp.watch(["src/assets/scss/**/*.scss"], ["styles", reload]);
});

// Serve the site after optimizations to see that everything looks fine
gulp.task("serve:prod", function () {
  bs = browserSync({
    notify: false,
    // tunnel: true,
    server: {
      baseDir: "site"
    }
  });
});

// Default task, run when just writing "gulp" in the terminal
gulp.task("default", ["serve:dev", "watch"]);

// CSS only
gulp.task("plain", ["styles", "watch"]);

// Checks your CSS, JS and Jekyll for errors
gulp.task("check", ["jslint", "doctor"], function () {
  // Better hope nothing is wrong.
});

// Builds the site but doesn"t serve it to you
gulp.task("build", ["jekyll:prod", "styles", "js"], function () {});


// Builds your site with the "build" command and then runs all the optimizations on
// it and outputs it to "./site"
gulp.task("publish", ["build"], function () {
  gulp.start("html", "copy", "cname", "images", "fonts", "vendors", "js", "scripts-opt", "scripts-opt-bideo", "video", "phpmailer","copy-pdfs");
});

gulp.task('scripts-opt', ["scripts-opt-bideo"], function() {
  return gulp.src('./src/assets/javascript/*.js')
    .pipe($.concat('main-scripts.js'))
    .pipe($.rename('scripts.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest("serve/assets/javascript/"))
    .pipe(gulp.dest("site/assets/javascript/"));

});

gulp.task('scripts-opt-bideo', function() {
  return gulp.src('./src/assets/javascript/vendors/bideo.js')
    .pipe($.rename('bideo.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest("site/assets/javascript/vendors/"))
    .pipe(gulp.dest("serve/assets/javascript/vendors/"));
});

// Copies favicon to the site folder
gulp.task("copy-pdfs", function() {
  return gulp.src("src/pdfs/*")
    .pipe(gulp.dest("site/pdfs"));
});

gulp.task('svgstore', function () {
    return gulp
        .src('src/images/elements/*.svg')
        .pipe(svgmin(function (file) {
            return {
                plugins: [{
                  removeTitle: true
                }, {
                  cleanupNumericValues: {
                    floatPrecision: 1
                  }
                }
              ]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('src/_includes/'));
});

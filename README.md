stylus-multi
============

This package provides many nice, useful Stylus packages. This approach might be more palatable to some than cluttering up their templates with CSS framework-proprietary classes such as those that come with Zurb Foundation and Twitter Bootstrap, or installing Sass. With these Stylus classes, one can avoid that by using Stylus mixins.

## Included packages

### [Stylus](http://learnboost.github.io/stylus/) 0.50.0

Expressive, dynamic, robust CSS. Curly braces and semicolons: optional.

### [Nib](http://visionmedia.github.io/nib/) 1.0.4

Nib is a popular Stylus package that adds many helpful, basic, utility mixins.

### [Autoprefixer](https://github.com/jenius/autoprefixer-stylus) 0.5.0

An autoprefixer plugin for Stylus. Will also remove unnecessary prefixes if there is widespread browser support.

### [Lost](https://github.com/corysimmons/lost) 5.1.2

SCSS or Stylus fractional grid system built with calc(), based on Bootstrap, with a modified Jeet fallback.

It's important to remember to include it in your styles, like so:

```
@import 'lost'
```

### [Rupture](https://github.com/jenius/rupture) 0.6.1

Simple media queries for Stylus.

### [Axis](http://axis.netlify.com/) 0.3.0

A higher-level Stylus mixin library with lots of extra functionality. Be sure not to miss the normalize() mixin. Axis uses and imports Nib, so Nib has been removed from this package.

## Features

An additional feature is support for the `//@import-only` shorthand. This will be checked for at the very top of your stylus files. If it's found as the first thing, the file will be skipped, so it can only be imported.

## Compatibility

The package is fully compatible with Meteor 0.9.

All of these packages should be compatible with each other. That said, there are not many tests at the moment. Feel free to PR any tests you think might be handy.

NOTE: This may not be compatible with other Meteor Stylus libraries. Please uninstall anything related to Stylus before running this, otherwise your application may fail with a fibers-related error.

## Updates

Feel free to contact the author or submit a PR if these get terribly out-of-date, or if you have any suggestions for other packages to be included.

## Testing

Basic tests for each module are provided. If you don't test in Chrome, you're gonna have a bad time.

To test, run:

```
meteor test-packages ./
```

## Credit

Thanks to @jenius and @corysimmons for their work on Axis & Rupture and Jeet, respectively.

This project was forked from [Dave Gonzalez's fork](https://github.com/davegonzalez/stylus-jeet) of [stylus-latest](https://github.com/sbking/meteor-stylus-latest/).

## Opinions

Developers are an opinionated bunch, but seriously, it's really nice to get framework-proprietary classes out of your templates.

Also, Stylus is best CSS preprocessor.

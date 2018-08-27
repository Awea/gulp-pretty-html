# Gulp pretty HTML
A simple Gulp plugin to make HTML pretty.

## Why?
Sometimes you need to deliver pretty HTML. Since Jade became [Pug](https://pugjs.org/api/getting-started.html) the `pretty` option has been marked as deprecated. This small plugin intends to replace it.

I made it for that usage but maybe there is others, dunno :)

## Prerequisites
* Gulp >= 3

## Installation

`npm install @awea/gulp-pretty-html`

**or**

`yarn add @awea/gulp-pretty-html`

## Options

Gulp pretty HTML uses [pretty](https://github.com/jonschlinkert/pretty) to prettify the HTML. The only option is `{ocd: true / false}`. As explained in pretty README this option will:

> condenses multiple newlines to a single newline
> trims leading and trailing whitespace
> ensures that a trailing newline is inserted
> normalizes whitespace before code comments

## Usage example

For a given Gulp `pug` task:

```js
gulp.task('pug', function (done) {
  gulp.src('templates/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
    .on('end', done)
});
```

Simply add `pretty()` after `pug()`:

```js
var pretty = require('@awea/gulp-pretty-html')

gulp.task('pug', function (done) {
  gulp.src('templates/**/*.pug')
    .pipe(pug())
    .pipe(pretty())
    .pipe(gulp.dest('./dist'))
    .on('end', done)
});
```
# grunt-pretty-data [![Build Status](https://travis-ci.org/lxinspc/grunt-pretty-data.svg?branch=master)](https://travis-ci.org/lxinspc/grunt-pretty-data)

> Run the nodejs plug in [pretty-data][1] against css, sql, json and xml files.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pretty-data --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pretty-data');
```

## The "pretty_data" task

### Overview
In your project's Gruntfile, add a section named `pretty_data` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pretty_data: {
    options: {
      filetypes: ['css','xml','json','sql']
      minify: true,             
      preserveComments: false   
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.filetypes
Type: `Array`
Default value: `['css','xml','json','sql']`

File types as extensions that will be processed by the grunt script.


#### options.minify
Type: `Boolean`
Default value: `true`

Should file be minified (`true`), or just beautified (`false`).

#### options.preserveComments
Type: `Boolean`
Default value: `false`

Should a minified file retain any comments, note, only applies if the file is minified, and is only applied to `css` and `xml` files - as per the options supported in [pretty-data][1]

### Usage Examples

#### Default Options
In this example, files in `src/testing` and `src/123` which have the extensions `.css`,`.xml`,`.json`,`.sql` will be minified, and no comments preserved

```js
grunt.initConfig({
  pretty_data: {
    files: {
       'dest/default_options': ['src/testing', 'src/123']
    },
  },
})
```

#### Custom Options
In this example, files in `src/testing` and `src/123` which have the extensions `.xml`,`.json` will be beautified.

```js
grunt.initConfig({
  pretty_data: {
    options: {
      filetypes: ['xml','json'],
      minify: false,
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

In this example, files in `src/testing` and `src/123` which have the extensions `.css`,`.xml` will be minified, and have any comments preserved.

```js
grunt.initConfig({
  pretty_data: {
    options: {
      filetypes: ['css','xml'],
      minify: true,
      commentsPreserved: true
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

18.10.2015  v.0.1.0   Initial release

## License
Copyright (c) 2015 Nathan Adams. Licensed under the MIT license.


[1]:https://github.com/vkiryukhin/pretty-data

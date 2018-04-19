# hyper2-border [![npm version](https://badge.fury.io/js/hyper2-border.svg)](https://badge.fury.io/js/hyper2-border) [![Build Status](https://travis-ci.org/lacymorrow/hyper2-border.svg?branch=master)](https://travis-ci.org/lacymorrow/hyper2-border)

> Add a gradient border to the [Hyper2](https://hyper.is/) terminal

[![hyper-border](https://raw.githubusercontent.com/lacymorrow/hyper-border/master/screenshot.png)](https://github.com/lacymorrow/hyper-border)

# Installation

Add `hyper2-border` to plugins in your `~/.hyper.js` configuration

````
module.exports = {
  ...
  plugins: ['hyper2-border']
  ...
}
````

then restart the `Hyper` app or go to the menu 'Plugins / Update All Now'

# Configuration

The following settings can be configured by adding a `hyperBorder` section in your `.hyper.js` `config` section:

| Setting              | Type                 | Description                                            |
|----------------------|----------------------|--------------------------------------------------------|
| `borderWidth`        | `string`             | CSS string for how thick the borders should be         |
| `borderColors`       | `string`, `string[]` | The color(s) for the border                            |

###### EXAMPLE: Set Border Colors And Width

```javascript
module.exports = {
  config: {
    ...
      hyperBorder: {
        borderColors: ['#fc1da7', '#fba506'],
        borderWidth: '8px'
      }
    ...
  }
}
```

###### EXAMPLE: Set Border Colors To Random Colors

In addition, you can set any color value to `'random'` (string value):

```javascript
module.exports = {
  config: {
    ...
      hyperBorder: {
        borderColors: ['random','random'],
        borderWidth: '8px'
      }
    ...
  }
}
```

Then every newly opened `Hyper` terminal window will have a different colored border.

# [Get Hyper](https://hyper.is/)


Full credit to [@Webmatze](https://github.com/webmatze) for original work on [hyperborder](https://github.com/webmatze/hyperborder).
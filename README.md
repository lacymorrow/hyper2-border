# hyperborder - extension for Hyper
adds a gradient border to the `Hyper` terminal

[![hyper-border](https://raw.githubusercontent.com/lacymorrow/hyper-border/screenshot.png)](https://github.com/lacymorrow/hyper-border)

## Installation

Add `hyper-border` to plugins in your `~/.hyper.js` configuration

````
module.exports = {
  ...
  plugins: ['hyper-border']
  ...
}
````

then restart the `Hyper` app or go to the menu 'Plugins / Update All Now'

## Configuration

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
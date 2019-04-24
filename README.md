<div align="center">
  <h1>v-safe</h1>
</div>
<p align="center">
  Vue.js directive to show text values from deep objects without any errors
</p>

[![Version](https://img.shields.io/npm/v/v-safe.svg)](https://github.com/guastallaigor/v-safe/)
[![Github file size](https://img.shields.io/github/size/guastallaigor/v-safe/dist/v-safe.min.js.svg)](https://raw.githubusercontent.com/guastallaigor/v-safe/master/dist/v-safe.min.js)
[![Downloads](https://img.shields.io/npm/dt/v-safe.svg)](https://github.com/guastallaigor/v-safe/)
[![Vue2](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/guastallaigor)

## Why

This is meant to avoid this type of error when you are using deep objects, that usually can happen when you're expecting a deep object after a Promise

```html
<span>{{ a.b.c.d }}</span>
```

> [Vue warn]: Error in render: "TypeError: Cannot read property 'c' of undefined"

## How to install

### npm

```bash
$ npm install v-safe --save
```

### yarn

```bash
$ yarn add v-safe
```

## Quick start
### Vue.js

You can import in you `main.js` file

```js
import Vue from 'vue'
import VSafe from 'v-safe'

Vue.use(VSafe)
```

### Nuxt.js

You can import as a Nuxt.js plugin

`~/plugins/v-safe.js`
```js
import Vue from 'vue'
import VSafe from 'v-safe'

Vue.use(VSafe)
```

and then import it in your `nuxt.config.js` file
```js
plugins: [
  '~/plugins/v-safe.js'
]
```

## Basic usage

```html
<template>
  <span v-safe="'a.b.c.d'"></span>
</template>

<script>
export default {
  data:() => ({
    a: {
      b: {
        c: {
          d: 'safe'
        }
      }
    }
  })
}
</script>
```

## Development

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/guastallaigor/v-safe/issues)

Fork the project and enter this commands in your terminal

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/v-safe.git
cd v-safe
yarn
```

<a href="https://www.buymeacoffee.com/guastallaigor" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License

MIT © [guastallaigor](https://github.com/guastallaigor/v-safe/blob/master/LICENSE)

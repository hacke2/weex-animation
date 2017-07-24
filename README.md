# weex-animation

like animation.css for weex.

Use weex playground scan:

![WX20170628-154657_2x]()


## getting start

```bash
npm install weex-animation --save
```

## use case

```js
import animation from 'weex-animation';

animation.fadeIn(el);

```

you should add exclude 'weex-animation' to vue/js loader, because it should build in your project. like this:

```js
  {
    test: /\.vue(\?[^?]+)?$/,
    loaders: ['weex-loader'],
    exclude: function(modulePath) {
      return /node_modules/.test(modulePath) && !/weex-animation/.test(modulePath);
    }
  },
  {
	test: /\.js$/,
	loaders: ['babel-loader'],
	exclude: function(modulePath) {
      return /node_modules/.test(modulePath) && !/weex-animation/.test(modulePath);
    }
  }

```


## npm scripts


```bash
# build the two js bundles and watch file changes
npm run dev

```

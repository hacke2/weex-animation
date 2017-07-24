# weex-animation

demo: http://www.hacke2.cn/weex-animation/

like animation.css for weex.

Use weex playground scan:

![playground](https://user-images.githubusercontent.com/6399899/28513090-4e80085c-7087-11e7-97bd-2fceaa6acf1d.png)

![native](https://user-images.githubusercontent.com/6399899/28513092-4eb30bb2-7087-11e7-9bb9-39ec2ba821da.png)


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

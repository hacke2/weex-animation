const animation = weex.requireModule('animation');

// 修改为 Promise 对象的，方便使用并行，串行动画
export function transition(el, opts) {
  if (!el) {
    return Promise.resolve();
  }
  return new Promise(function (resolve) {
    animation.transition(el, {
      duration: 400, //ms
      timingFunction: 'ease',
      delay: 0, //ms
      ...opts
    }, resolve);
  })
}

function transitionNow(el, styles) {
  const duration = 0.0001;
  return new Promise(function (resolve, reject) {
    animation.transition(el, {
      // weex bug, can't use 0
      duration,
      styles
    });
    setTimeout(function () {
      resolve();
    }, duration)
  })
}

// 隐藏list
export async function fadeOut(el, obj) {
  await transitionNow(el, {
    opacity: 1
  });

  return transition(el, {
    styles: {
      opacity: 0
    },
    ...obj
  })
}

// 显示list
export async function fadeIn(el, obj) {
  await transitionNow(el, {
    opacity: 0
  });

  return transition(el, {
    styles: {
      opacity: 1
    },
    ...obj
  })
}

// 缩小
export async function zoomOut(el, obj) {
  await transitionNow(el, {
    opacity: 1,
    transform: 'scale(1)',
  });

  return transition(el, {
    styles: {
      opacity: 0,
      transform: 'scale(0)',
    },
    ...obj
  })
}

// 放大
export async function zoomIn(el, obj) {
  await transitionNow(el, {
    opacity: 0,
    transform: 'scale(0)'
  });

  return transition(el, {
    styles: {
      opacity: 1,
      transform: 'scale(1)',
    },
    ...obj
  })
}

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

// 隐藏list
export function fadeOut(el, obj) {
  return transition(el, {
    styles: {
      opacity: 0
    },
    ...obj
  })
}

// 显示list
export function fadeIn(el, obj) {
  return transition(el, {
    styles: {
      opacity: 1
    },
    ...obj
  })
}

// 向上移动
export function fadeInUp(el, y = -100) {
  return transition(el, {
    styles: {
      opacity: 1,
      transform: `translate(0, ${y}px)`
    }
  })
}

// 向上移动并且隐藏
export function fadeOutUp(el, y = -100, obj) {
  return transition(el, {
    styles: {
      opacity: 0,
      transform: `translate(0, ${y}px)`
    },
    ...obj
  })
}

// 向上移动
export function translateY(el, y = 0, obj) {
  return transition(el, {
    styles: {
      transform: `translate(0, ${y}px)`
    },
    ...obj
  })
}

// 卡片位置复原
export function fadeOutDown(card, y = 100, obj) {
  return transition(card, {
    styles: {
      opacity: 0,
      transform: `translate(0, ${y}px)`
    },
    ...obj
  })
}

// 放大缩小
export function scale(card, scale) {
  return transition(card, {
    styles: {
      transform: `scale(${scale})`,
    }
  })
}

// 放大缩小
export function scaleUp(card, {y = -100, scale}) {
  return transition(card, {
    styles: {
      transform: `translateY(${y}px) scale(${scale})`,
    }
  })
}

// 缩小
export async function zoomOut(card, obj) {
  await transition(card, {
    styles: {
      opacity: 1,
      transform: `scale(1)`,
    },
    duration: 0.0001
  });
  return transition(card, {
    styles: {
      opacity: 0,
      transform: `scale(0)`,
    },
    ...obj
  })
}

// 放大
export async function zoomIn(card, obj) {
  await transition(card, {
    styles: {
      opacity: 0,
      transform: `scale(0)`,
    },
    duration: 0.0001
  });
  return transition(card, {
    styles: {
      opacity: 1,
      transform: `scale(1)`,
    },
    ...obj
  })
}

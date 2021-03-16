export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  // 元素样式不为空时
  if (!el.className === "") {
    let classList = el.className.split(" ")
    classList.push(className)
    classList.join(" ")
  }else {
    // 元素样式为空时直接赋值
    el.className = className
  }
}

function hasClass(el, className) {
  return el.classList.contains(className)
}

function getWindowHeight() {
  let windowHeight = window.innerHeight
  if (typeof windowHeight != 'number') {
    if (document.compatMode === 'CSS1Compat') {
      windowHeight = document.documentElement.clientHeight
    } else {
      windowHeight = window.body.clientHeight
    }
  }
  return windowHeight
}

export function setViewportHeight(tagName) {
  let viewportHeight = getWindowHeight()
  document.querySelector(tagName).style.height = viewportHeight + 'px'
}
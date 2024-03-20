import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.less';
/* REDUX */
import { Provider } from 'react-redux';
import store from './store';

import Home from './views/Home';
/* 响应式布局: 改变REM换算比例 */
import 'lib-flexible';

/* 处理最大宽度: 当设备宽度大于750时，不再放大。太大就不好看了 */
(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement,
      root = document.getElementById('root'),
      deviceW = html.clientWidth;
    root.style.maxWidth = "750px";
    if (deviceW >= 750) {
      html.style.fontSize = '75px';
    }
  };
  handleMax();
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);

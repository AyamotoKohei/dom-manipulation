'use strict';

// jqueryをモジュールを読み込む
import $ from 'jquery';

// HTMLの要素を取得するAPI
const block = $('#block');
const scalingButton = $('#scaling-button');

// 要素がクリックされた時に、click関数に渡された関数が呼び出される
scalingButton.click(() => {
  // animate関数を呼び出す
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});
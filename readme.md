## 說明 ##
部落格：https://partypeopleland.github.io/artblog/2018/04/09/es6-webpack-%E7%B7%B4%E7%BF%92/


### 使用套件

| #| 套件名稱 | 說明 | 設定檔 | 文件(參考資料) |
|---|---|---|---|---|
| 1 |wallaby.js | 支援TDD、BDD開發的工具 | wallaby.js | [wallabyjs](https://wallabyjs.com/docs/) |
| 2 |quokka.js | 支援javascript的即時回饋 | -- | [quokkajs](https://quokkajs.com/docs/) |
| 3 | mocha | 單元測試框架 | test/mocha.opts | [阮一峰的測試框架mocha實例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)|
| 4 | chai | 單元測試的斷言庫 | -- | [Chaijs官方網站](http://www.chaijs.com/)|
| 5 | babel-core | es6語法轉譯 | .babelrc | [阮一峰的Babel入門教程](http://www.ruanyifeng.com/blog/2016/01/babel.html) |
| 6 | babel-polyfill | Babel預設只轉換新的Js語法，此套件則提供新的API轉換，是為了解決瀏覽器不支援新API的問題 | -- | -- |
| 7 | babel-preset-es2015 | ES2015轉碼規則 | .babelrc | -- |
| 8 | babel-preset-stage-0 | ES7不同階段語法提案的轉碼規則，本專案使用stage-0 | .babelrc | -- |
| 9 | webpack | webpack工具 | -- | [webpack官方文件-概念](https://doc.webpack-china.org/concepts/) |
| 10 | webpack-cli | webpack工具 | -- | -- |
| 11 | webpack-merge | webpack設定檔工具 | webpack.common.js等設定檔案 | [webpack官方文件](https://doc.webpack-china.org/guides/production/) |
| 12 | babel-loader | webpack工具支援es6語法 | -- | -- |


### 單元測試 ###
1. 直接執行 `mocha` 即可於node環境下跑單元測試
1. 開發階段可以執行 `mocha -w` 進入 **watch** 模式，當測試程式變更存檔時， `mocha` 會自動重跑所有測試

### 開發 / 生產環境 ###
透過 `webpack` 建構、打包前端程式碼，參考官方網站文件，採用 `common` 、 `dev` 、 `prod` 三份文件來處理共用及差異的部分，指令封裝於 `package.json` ，開發環境需要 `source-map` 功能；生產環境則需要將程式碼壓縮、打包

| 環境 | 建構指令 | Watch | Source Map | 打包 | 壓縮 |
|---|---|---|---|---|---|
| 開發環境 | yarn dev | v | v | -- | -- |
| 生產環境 | yarn prod | -- | -- | v | v |

### ES6 類別範例 ###
1. [MDN web docs - Classes](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes)

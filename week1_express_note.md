# Week1 Express Note

> 問題1: mac系統裝node一直遇到permission的問題
> 問題2: 沒用engine
> 問題3: gitignore

## mac 安裝 Node.js

> Reference:
> 1. [Node.js 安裝與版本切換教學 (for MAC)](http://icarus4.logdown.com/posts/175092-nodejs-installation-guide)
> 2. [Node.js - Mac 重新安裝npm](http://iambigd.blogspot.tw/2014/06/npm.html)

### Homebrew是什麼？
OSX 套件管理軟體，常常在安裝不同版本的軟體時，可能會造成不同軟體上的衝突，而 Homebrew 可以幫助你管理這些不同軟體之間的相依性問題。


### 安裝 Homebrew

1. 在安裝完 **Xcode** 後，開啟 **Xcode** 同意授權，等 **Xcode** 授權完畢且開啟完成後，開啟 terminal 之後，執行:

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Homebrew 能在 `/usr/local/bin`中啟動，不用寫出完整路徑，若是使用 **.zshrc** 請將`.bash_profile`改成`.zshrc`

```
$ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
```

3. 重新導入

```
$ source ~/.bash_profile
```

4. 對已經安裝的套件進行檢測

```
$ brew doctor
```
如果出現`Your system is ready to brew.`，就可以開始使用。

### 安裝 nvm

1. 安裝nvm
```
$ brew install nvm
```

2. 安裝完後，為了讓你可以直接在shell使用nvm指令，必須在你的 .bash_profile 加入以下這行（設定放在.zahrc的人可以把以下的.bash_profile改成.zahrc）

```
$ echo "source $(brew --prefix nvm)/nvm.sh" >> .bash_profile
```

3. 記得重新source你的 .bash_profile 來讓設定生效
```
$ . ~/.bash_profile
```


### 使用 nvm 安裝 Node.js
先用`$ nvm ls-remote`指令看一下有哪些版本可以安裝
`$ nvm install <version>`指令安裝官網上建議的版本，例如：
```
$ nvm install v0.10.24
```

### 使用 nvm 切換 Node.js 版本

可以用`$ nvm ls`指令確認nvm目前可以管理的版本有哪些：

```
$ nvm ls

  v0.10.24
  v0.11.10
current:    v0.11.10
```
由於透過nvm安裝node，會自動把最後安裝的版本設為目前使用中的版本，因此上述指令會看到current: v0.11.10，表示我們目前正在使用v0.11.10

可以用`$ nvm use <version>`切換版本：

 ```
$ nvm use v0.10.24

Now using node v0.10.24
```
也可以偷懶一點，不用打完整的版號：

```
$ nvm use 0.10
 
Now using node v0.10.24
```
切換成別的版本看看：
```
$ nvm use 0.11
 
Now using node v0.11.10
```

不過問題來了，如果你另外開一個shell視窗，並輸入nvm，會發現current version是空的：

```
$ nvm ls

  v0.10.24
  v0.11.10
current:
``` 
這是因為利用nvm use指令只會在當前的shell生效，當你開了新的shell就會發現`$PATH`的值已經不包含剛才設定的node目錄了。要解決這個問題就是利用`$ nvm alias default <version>` 來設定一個預設的node版本：

```
 $ nvm alias default 0.10
default -> 0.10 (-> v0.10.24)
```
此時再打開另一個shell視窗，就可以直接使用你所設定的node版本了。

## Express

>Reference:
>[node-js-express-初入門-上集](https://hellolynn.hpd.io/2017/08/11/node-js-express-%E5%88%9D%E5%85%A5%E9%96%80-%E4%B8%8A%E9%9B%86/)


```
mkdir first_app
cd first_app
npm install express
```

```
#自動默認設置
npm init [--yes]  
--save存到package.jason
--save-dev(開發時用到)

npm uninstall <package_name>

npm install //只要有package.json就能下這個，就能自動把該專案有安裝的套件安裝在本機
# 使用 --save 安裝，會將專案套件加入依賴列表中，未來可以快速的恢復開發環境
npm install --save // 會在安裝套件的時候，也順便把套件版本寫到 package.json 檔案內

補充：一般 npm install 的時候會把套件裝在專案資料夾下的 node_modules 內，在上傳或是共享專案的時候，通常不用把已經安裝的 node_modules 所有套件一起分享，僅需提供 package.json 讓對方可以自行下載即可。

```

### packages

* 必填的值
name:<project name> 注意不能用跟package同樣的名稱
version:“1.0.0”
* 開發常用
scripts:你可能會常用的指令
start:執行的檔案(打 npm start即可執行，等同於node server.js)
test:測試
scripts: { “start”: “node server.js” }
dependencies: { “express”: “^4.16.3” }
(all environments)//環境所安裝之套件
devDependencies: { “mocha”: “^5.1.0” }
(develop or test environments)
optional的值
description: “st2de project”
keywords: [“st2de”]
author: “st2de”
license: “ISC”
main: “index.js”

以上的詳細資訊可以到npm的網站上找，建議大家常去看官方文件。 https://www.npmjs.com/
因為有這個檔案(package.json)，所以在上傳 git 的時候，就可以不用把 node_modules 上傳。
    
    
```
npm install express --save 
```

### Express generator
```
npm install express-generator -g
```
```
express -h
```

```
express --view=pug another_app
cd another_app
npm install
```
>https://expressjs.com/en/starter/generator.html


```
npm start
node ./bin/www
node app.js
```


### 忽略檔案
.gitignore
https://zlargon.gitbooks.io/git-tutorial/content/file/ignore.html
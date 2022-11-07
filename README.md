# hardhat_template
 hardhat编写智能合约的项目模板



## 如何使用

1, 下载该repo

2, 使用makefile

+ **新建项目** (项目名称可通过 makefile 中的`PROJECT_NAME="xxx"`修改)

```makefile
make new 
```

弹出提示时, 选择`Create an empty hardhat.config.js`

<img src="https://github.com/yinhui1984/imagehosting/blob/main/images/1667804099100546000.jpg?raw=true" alt="image" style="zoom:50%;" />

```
OSX MP16 ~/Desktop/hardhat_demo ❯ make new
mkdir "hardhat-project"
cd "hardhat-project" && npm init -y
Wrote to /Users/zhouyinhui/Desktop/hardhat_demo/hardhat-project/package.json:

{
  "name": "hardhat-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


cd "hardhat-project" && npm install --save-dev hardhat

added 300 packages in 42s
cd "hardhat-project" && npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.12.2 👷‍

✔ What do you want to do? · Create an empty hardhat.config.js
✨ Config file created ✨

Give Hardhat a star on Github if you're enjoying it! 💞✨

     https://github.com/NomicFoundation/hardhat
cd "hardhat-project" && npm install --save-dev @nomicfoundation/hardhat-toolbox

added 397 packages in 57s
cd "hardhat-project" && ex -sc '1i|require("@nomicfoundation/hardhat-toolbox");' -cx hardhat.config.js
mkdir -p "hardhat-project"/contracts && cp Hello.sol "hardhat-project"/contracts
mkdir -p "hardhat-project"/test && cp Hello.test.js "hardhat-project"/test
```

+ 新建完成后, 编译项目

```makefile
make compile
```

```
OSX MP16 ~/Desktop/hardhat_demo ❯ make compile                                                     
cd "hardhat-project" && npx hardhat compile
Compiled 2 Solidity files successfully
```

+ 编译完成后, 运行单元测试

```makefile
make test
```

```
OSX MP16 ~/Desktop/hardhat_demo ❯ make test
cd "hardhat-project" && npx hardhat test


  Hello contract
enter the constructor
this is the log in function SayHello
    ✔ Get greeting form contract (1778ms)


  1 passing (2s)

```



3, 添加新合约

在 $(PROJECT_NAME)/contracts 下添加合约

在 $(PROJECT_NAME)/test 下添加单元测试
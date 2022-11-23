# hardhat 项目模板



每次创建一个新项目需要花很多时间组织项目结构和`npm i`, 干脆做成模板, 每次copy

## 如何使用

A. 下载或克隆项目

到克隆文件夹中 `npm i`



B. 在zsh.rc 或bash.rc 中创建一个函数

替换 `/xxxx/newhardhatproject.sh` 为实际路径

```
function newhardhatproject(){
	zsh /xxxx/newhardhatproject.sh $1
}
```



C. 新建项目

`OSX MP16 ~/Downloads ❯ newhardhatproject myapp123`

其会在当前路径下新建项目文件夹, 拷贝克隆文件夹中的文件到当前项目文件夹, 并打开vs code



D. 干活

```makefile

.PHONY:  test, dapp

compile:
	npx hardhat compile

deploy:
	@echo  "\033[31m部署合约\033[m" 
	# 这将使用 --network localhost 进行部署
	npx hardhat run scripts/deploy.js  --network localhost

node:
	@echo  "\033[31m启动hardhat node\033[m" 
	npx hardhat node

test:
	@echo  "\033[31m运行使用js编写的测试用例\033[m" 
	@# 后面跟文件路径可以只运行某个测试文件， 比如 npx hardhat test ./test/ZombieAttack.test.js 
	npx hardhat test

dapp:
	@echo  "\033[31m运行前端应用, 记得先部署并更新contract_info.js\033[m"
	serve ./dapp -p 3000
```



> 其中`dapp/index.js`中需要用到合约的地址和ABI, 其是从`dapp/contract_info.js`中导入的,
>
> 重新部署后, 使用打印的合约地址以及`artifacts/contracts`下的abi去更新改文件



![image](https://github.com/yinhui1984/imagehosting/blob/main/images/1669180828535913000.jpg?raw=true)

.PHONY:  test dapp

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
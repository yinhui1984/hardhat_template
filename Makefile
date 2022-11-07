PROJECT_NAME="hardhat-project"

all:compile

new:
	mkdir $(PROJECT_NAME)
	cd $(PROJECT_NAME) && npm init -y
	cd $(PROJECT_NAME) && npm install --save-dev hardhat
	cd $(PROJECT_NAME) && npx hardhat
	cd $(PROJECT_NAME) && npm install --save-dev @nomicfoundation/hardhat-toolbox
	cd $(PROJECT_NAME) && ex -sc '1i|require("@nomicfoundation/hardhat-toolbox");' -cx hardhat.config.js 
	mkdir -p $(PROJECT_NAME)/contracts && cp Hello.sol $(PROJECT_NAME)/contracts
	mkdir -p $(PROJECT_NAME)/test && cp Hello.test.js $(PROJECT_NAME)/test

delete:
	# ask for comfirm, if yes rm all
	echo "Are you sure you want to delete $(PROJECT_NAME) directory? [y/n]"
	read answer && if [[ $$answer == "y" ]];then rm -rf ./$(PROJECT_NAME); fi

compile:
	cd $(PROJECT_NAME) && npx hardhat compile

test:
	cd $(PROJECT_NAME) && npx hardhat test
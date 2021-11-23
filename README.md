# Send Me Coffee Contract 
Thanks for stopping by and checking out this project! This repo is the backend to stevedsimkins/sendmecoffee-ui, and it is an ethereum smart contract built with Hardhat and Solidity. If you want to fork this project and use it yourself, please follow the steps below: 

## Step 1: Clone repo and run ```npm install``` 
Make sure all dependancies are installed!

## Step 2: Create an [Alchemy](https://www.alchemy.com/) account 
The easiest way to deploy this contract is to use Alchemy, plus its free on their end! :) 

## Step 3: Create a new project in Alchemy and get the API key 
Simply give the project a name, description, select "development" as the environment, and I would suggest starting on the Ethereum chain and the Rinkeby network. Then click "create app." Once it's created click on the button that says "view key" on the app dashboard. Keep is safe!

## Step 4: Create .env file 
This is important, you want to keep your Alchemy API key secret as well as your private keys! Run the following in your terminal
```shell 
touch .env 
```
Then open the .env file with your text editor and put in your Alchemy API key and your ethereum wallet private key. This is how Alchemy will charge the gas fee to deploy the contract on the ethereum network 

``` 
ALCHEMY_STAGING_KEY = "you api key url goes here...."
PRIVATE_KEY = your private key goes here 
```

If you ran ```npm install``` then dotenv should be installed and will process the env file in your hardhat.config.js file. 

## Step 5: LAUNCH THIS THING 🚀
It's time to do this!! First make sure you have enough test ether on the rinkeby network to pay for gas fees; same goes for the mainnet. Once you got that straight go ahead and run this command: 

```shell 
npx hardhat run scripts/deploy.js --network rinkeby 
```

After that you should get a confirmation of the deployed contract with the contact address! Be sure to copy that contract address, and also go into ###FIX THIS

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

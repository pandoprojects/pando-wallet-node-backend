#Detail of wallet application Backend ||
### About WAllet Application
If you create a new wallet. One you reach the Pando Wallet site, then click “Create Wallet”. Next you will download an encrypted keystore file and create a wallet password. This encrypted keystore file on your computer will be used to unlock your wallet any time you want to access it. You will then need to copy down the mnemonic/seed phrase (and private key, if you choose to) and store them in a safe place. Your mnemonic/seed phrase and private key are the only way to restore your Pando wallet if you lose your keystore file and/or wallet password! Make sure you save them correctly and store them offline in safe place (never online or in the cloud!). Once your wallet has been created, you can unlock your new Pando Wallet.

If you are unlocking an existing wallet, we recommend you take your device offline while upload your keystore or enter your mnemonic phrase or private key. Once the wallet has been unlocked, you’ll see a screen that says “you’re offline!” and will have the opportunity to connect to the internet before you continue to the wallet. Once you’re in your Pando wallet, you can check the balance of your Pando Tokens.

#How to launch the project on your local system
'''
Runs command =npm start.

'''
Open http://localhost:4011 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

Install editor, node js, npm
node js version=v12.22.9
npm version=8.5.1

Install all the project dependencies by running below command
npm install.
npm install nodemon

Now update the  project Database
PORT=4011
DB_HOST=localhost
DATABASE=wallet

## Now update the .env file variables
PORT=6577

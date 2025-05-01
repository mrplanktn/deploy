cara run 

`` 
git clone https://github.com/mrplanktn/deploy
``

``
mkdir megaeth-deploy
cd megaeth-deploy
npm init -y
npm install --save-dev hardhat
npx hardhat
# pilih "Create a basic sample project"
npm install --save-dev @nomicfoundation/hardhat-toolbox
``

buat file .ENV masukan private key

``
PRIVATE_KEY=XXXXXXXXXX 
``

run 

``
npx hardhat run scripts/deploy.js --network megaeth
``

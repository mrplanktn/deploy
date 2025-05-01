const hre = require("hardhat");
const readline = require("readline");

// Fungsi untuk ambil input dari terminal
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

async function main() {
  const input = await askQuestion("Masukkan jumlah deploy: ");
  const totalDeploy = parseInt(input);

  if (isNaN(totalDeploy) || totalDeploy <= 0) {
    console.error("Input tidak valid. Harus berupa angka lebih dari 0.");
    process.exit(1);
  }

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");

  for (let i = 1; i <= totalDeploy; i++) {
    const contract = await HelloWorld.deploy();
    await contract.waitForDeployment();

    const address = await contract.getAddress();
    console.log(`Deployment #${i} -> ${address}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



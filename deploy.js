async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();  // Deploy kontrak

  // Tunggu hingga kontrak benar-benar ter-deploy
  await hello.deployTransaction.wait();
  
  console.log("Deployed to:", hello.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// viem library imports
import { generateMnemonic, mnemonicToAccount } from "viem/accounts";
import { english } from "viem/accounts";

// Generate mnemonic and display wallet information
const createMnemonic = () => {
  // Generate a random mnemonic with English wordlist
  const mnemonic = generateMnemonic(english);

  // Derive the first account (index 0) from the mnemonic
  const account = mnemonicToAccount(mnemonic);

  // Get private key from HD key
  const hdKey = account.getHdKey();
  const privateKey = hdKey.privateKey
    ? `0x${Buffer.from(hdKey.privateKey).toString("hex")}`
    : "N/A";

  // Display the generated information
  console.log("\n=== Generated Wallet Information ===\n");
  console.log("Mnemonic Phrase:");
  console.log(`  ${mnemonic}\n`);
  console.log("First Account (Index 0):");
  console.log(`  Address:     ${account.address}`);
  console.log(`  Private Key: ${privateKey}`);
  console.log("\n=====================================\n");
};

// Call the function to generate mnemonic
createMnemonic();

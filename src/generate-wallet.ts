// viem library imports
import { generateMnemonic, mnemonicToAccount } from "viem/accounts";
import { english } from "viem/accounts";

// Generate mnemonic and display wallet information
const createMnemonic = () => {
  // Generate a random mnemonic with English wordlist
  const mnemonic = generateMnemonic(english);

  // Display the generated information
  console.log("\n=== Generated Wallet Information ===\n");
  console.log("Mnemonic Phrase:");
  console.log(`  ${mnemonic}\n`);

  // Derive and display accounts for indices 0-4
  for (let i = 0; i < 5; i++) {
    const account = mnemonicToAccount(mnemonic, { addressIndex: i });

    // Get private key from HD key
    const hdKey = account.getHdKey();
    const privateKey = hdKey.privateKey
      ? `0x${Buffer.from(hdKey.privateKey).toString("hex")}`
      : "N/A";

    console.log(`Account ${i}:`);
    console.log(`  Address:     ${account.address}`);
    console.log(`  Private Key: ${privateKey}\n`);
  }

  console.log("=====================================\n");
};

// Call the function to generate mnemonic
createMnemonic();

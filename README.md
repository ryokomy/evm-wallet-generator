# EVM Wallet Generator

A simple, local tool for generating EVM-compatible wallets with mnemonic phrases.

## Prerequisites

- Node.js (tested on Node.js 22)
- npm (tested on npm 10.9.3)

## Why Local Generation?

Creating mnemonic phrases locally is crucial for security. Never trust online generators or third-party services with your wallet generation. This tool runs entirely on your machine, ensuring your private keys never leave your device.

## Features

- Generate secure 12-word mnemonic phrases
- Derive the first 5 accounts (indices 0-4) with addresses and private keys
- Built with [viem](https://viem.sh/) - a modern Ethereum library
- Completely offline and local execution

## Installation

```bash
npm install
```

## Usage

Generate a new wallet:

```bash
npm run generate
```

## Output Example

```
=== Generated Wallet Information ===

Mnemonic Phrase:
  word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12

Account 0:
  Address:     0x1234567890abcdef1234567890abcdef12345678
  Private Key: 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890

Account 1:
  Address:     0x2234567890abcdef1234567890abcdef12345678
  Private Key: 0xbbcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890

Account 2:
  Address:     0x3234567890abcdef1234567890abcdef12345678
  Private Key: 0xbccdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890

Account 3:
  Address:     0x4234567890abcdef1234567890abcdef12345678
  Private Key: 0xbdcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890

Account 4:
  Address:     0x5234567890abcdef1234567890abcdef12345678
  Private Key: 0xbecdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890

=====================================
```

## Security Warning

⚠️ **IMPORTANT**:
- Never share your mnemonic phrase or private key with anyone
- Store your mnemonic phrase securely offline
- This tool is for educational and development purposes
- Always verify addresses before sending funds

## License

MIT

export function isWallet(wallet) {
  return true;
}

export function isDotBitAccount(wallet: string) {
  return wallet.trim().endsWith('.bit');
}

export function getArrayList(wallet) {
  return ['frank1234.bit'];
}

export function whiteList(wallet) {
  if (!isWallet(wallet)) return;
  else if (!isDotBitAccount(wallet)) return;
  console.log('whiteList has been executed!');
  const arrList = getArrayList(wallet);
  return arrList.includes(wallet);
}
console.log(whiteList('0x7d530541Cd41F0f2A57De4cf0E1b0895176bE554'));

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
  const arrList = getArrayList(wallet);
  return arrList.includes(wallet);
}

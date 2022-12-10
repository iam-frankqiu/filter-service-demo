export function getTokenNumber(wallet) {
  return 1;
}

export async function tokenLimits(wallet, number) {
  const token = await getTokenNumber(wallet);
  return token >= number;
}

console.log('execute the code');

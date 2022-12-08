export function getTokenNumber(wallet) {
  return 1;
}

export async function TokenLimits(wallet, number) {
  const token = await getTokenNumber(wallet);
  return token >= number;
}

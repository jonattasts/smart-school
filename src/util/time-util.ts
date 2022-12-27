export function forceWait(millisToWait: number = 250): Promise<void> {
  return new Promise((fnResolve) => {
    setTimeout(() => {
      fnResolve();
    }, millisToWait);
  });
}
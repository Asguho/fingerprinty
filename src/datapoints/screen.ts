export function getScreenData() {
  //screen: Object.keys(getPropertyData(screen)),
  const keys = ['availWidth', 'availHeight', 'width', 'height', 'colorDepth', 'pixelDepth', 'availLeft', 'availTop', 'isExtended'];
  return keys.map((key) => {
    return { [key]: (screen as any)[key] };
  });
}

export function getNavigatorData() {
  //navigator: Object.keys(getPropertyData(navigator)),
  const keys = [
    'vendorSub',
    'productSub',
    'vendor',
    'maxTouchPoints',
    'doNotTrack',
    'plugins',
    'mimeTypes',
    'pdfViewerEnabled',
    'hardwareConcurrency',
    'cookieEnabled',
    'appCodeName',
    'appName',
    'appVersion',
    'platform',
    'product',
    'userAgent',
    'language',
    'languages',
    'onLine',
    'webdriver',
    'deprecatedRunAdAuctionEnforcesKAnonymity',
    'deviceMemory',
    'userAgentData',
  ];
  return keys.map((key) => {
    return { [key]: (navigator as any)[key] };
  });
}

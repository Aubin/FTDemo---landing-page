function useBetaVersion(element) {
  var urlToBetaVersion = element.href.replace(/\/fluid-topics/, ':8081');
  window.open(urlToBetaVersion);
  return false;
}
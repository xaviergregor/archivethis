chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url) {
    const archiveUrl = "https://archive.is/" + tab.url;
    chrome.tabs.create({ url: archiveUrl });
  }
});


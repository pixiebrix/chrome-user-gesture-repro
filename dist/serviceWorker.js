chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  void chrome.sidePanel.setOptions({
    tabId: sender.tab.id,
    path: "sidepanel.html",
    enabled: true,
  });

  chrome.sidePanel.open({ tabId: sender.tab.id }).then(
    () => {
      sendResponse({ success: "success" });
    },
    (error) => {
      sendResponse({
        error: error.message,
      });
      throw error;
    },
  );

  return true;
});

console.log("Background script loaded.");

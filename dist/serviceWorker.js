chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === "open") {
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
      }
    );

    return true;
  } else if (request.command === "repro") {
    // The contents do not matter
    chrome.tabs.sendMessage(sender.tab.id, "JUNK");
  }
});

console.log("Background script loaded.");

## chrome-user-repro

- Minimal reproduction for https://groups.google.com/a/chromium.org/g/chromium-extensions/c/WRGFOAHxoaY
- To use, load the extension in Google Chrome 127.0.6533.73
- Ensure that the 1Password Chrome Extension is installed
- Click the `This is the inserted button, click on me!` button injected on any page
- The button is injected by the content script and sends a message to the service worker
- The service worker then calls the chrome.sidePanel.open() API
- The sidePanel.open API errors with "`sidePanel.open()` may only be called in response to a user gesture."

var blockImages = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.toggle) {
    blockImages = !blockImages;
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: blockImages && (details.type == "image" || details.type == "sub_frame")};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);

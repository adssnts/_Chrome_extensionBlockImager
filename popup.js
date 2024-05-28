// popup.js
document.getElementById('toggleButton').addEventListener('click', function() {
  chrome.runtime.sendMessage({toggle: true});
});

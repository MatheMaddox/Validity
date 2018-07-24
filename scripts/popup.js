$('#scanPage').click(function() {
  chrome.tabs.executeScript({
    file: './main.js'
  });
});

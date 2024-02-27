chrome.action.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id, allFrames: true},
        files: ['inject.js'],
    });
});
let apiToken = "";


chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "translate_context_action",
        title: "Translate in...",
        type: 'normal',
        contexts: ['selection'],
    });
});




chrome.contextMenus.onClicked.addListener(async function (infos) {
    const selectionText = infos.selectionText;

    if (infos.menuItemId === "translate_context_action" && selectionText) {
        const source = infos.pageUrl;
        console.log("pageUrl", source);
        await chrome.storage.sync.set({
            lastSelectedText: selectionText
        });
        chrome.tabs.create({
            url: chrome.runtime.getURL('views/html/popup.html'),
            active: true
        }, function (tab) {
        });
        // chrome.tts
        //chrome.notifications https://developer.chrome.com/docs/extensions/reference/#:~:text=New%20Tab%20page.-,notifications,-Use%20the%20chrome
    }
});
let apiToken = "";


chrome.runtime.onInstalled.addListener(() => {
    // chrome.contextMenus.removeAll(function () {

    // });
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
        console.log("selectionText", selectionText);
        console.log("pageUrl", source);
        // const popUp = await chrome.action.getPopup();
        // console.log(popUp);
        chrome.tabs.create({
            url: chrome.runtime.getURL('views/html/popup.html'),
            active: false
        }, function (tab) {
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true
            });
        });
    }
});
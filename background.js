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




chrome.contextMenus.onClicked.addListener(function (infos) {
    console.log("selectionText", infos.selectionText);
    console.log("pageUrl", infos.pageUrl);
    if (infos.menuItemId === "translate_context_action" && infos.selectionText) {
        console.log("SELECTED ", infos.selectionText);
        const url = "https://learning-language.jpec.be/";

        fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json; charset=utf-8"
                },
                mode: "no-cors",
                body: JSON.stringify(json)
            })
            .then(resp => console.log(resp));
        // do something
    }
});
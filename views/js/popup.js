let configurateButton = document.getElementById("configurate-extension");


configurateButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        func: getSelectedText,
    });
});

function getSelectedText() {
    //Document refers to the tab!
    console.log("getSelectedText");
    const selection = window.getSelection().toString();
    console.log("selection IS : ", selection);
}
// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    console.log("OnMessage", msg);
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.querySelector("body").innerText);
    }
});

//https://developer.chrome.com/docs/extensions/mv3/content_scripts/#programmatic

// var port = chrome.runtime.connect();
// window.addEventListener("message", (event) => {
//     // We only accept messages from ourselves
//     print("Message received", event);
//     if (event.source != window) {
//         return;
//     }

//     if (event.data.type && (event.data.type == "FROM_PAGE")) {
//         console.log("Content script received: " + event.data.text);
//         port.postMessage(event.data.text);
//     }
// }, false);
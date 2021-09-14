# Language Learning Chrome extension

This extension is meant to be used with my future Language Learning App. Stay tuned!


## TODOs

https://developer.chrome.com/docs/extensions/mv3/user_interface/







//error
// chrome.browserAction.onClicked.addListener(function (tab) {
//     // ...check the URL of the active tab against our pattern and...
//     if (urlRegex.test(tab.url)) {
//         // ...if it matches, send a message specifying a callback too
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     }
// });


chrome.commands.onCommand.addListener((command) => {
    console.log("Command: ", command);
    if (command == "translate-command"){
    }
  });

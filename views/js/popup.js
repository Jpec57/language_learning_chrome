let configurateButton = document.getElementById("configurate-extension");
let configContainer = document.querySelector("configuration-hint-container");
const baseUrl = "https://learning-language.jpec.be/";

//Wait for domloaded to check if token is 
//registered. If not, remove hidden to .configuration-hint-container
//and add it to .create-card-container

configurateButton.addEventListener("click", async () => {
    chrome.runtime.openOptionsPage();
});

function getSelectedText() {
    //Document refers to the tab!
    console.log("getSelectedText");
    const selection = window.getSelection().toString();
    console.log("selection IS : ", selection);
}


const sendVocabCard = () => {
    fetch(baseUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            mode: "no-cors",
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
};
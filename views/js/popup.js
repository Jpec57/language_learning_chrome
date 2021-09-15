let configurateButton = document.getElementById("configurate-extension");
const baseUrl = "https://learning-language.jpec.be/";

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
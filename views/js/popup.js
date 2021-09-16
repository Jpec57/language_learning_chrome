const baseUrl = "https://learning-language.jpec.be/";

function getSelectedText() {
    //Document refers to the tab!
    console.log("getSelectedText");
    const selection = window.getSelection().toString();
    console.log("selection IS : ", selection);
}

const testGet = () => {
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

const sendVocabCard = (form) => {
    var formData = new FormData(form);
    console.log("formData");
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', |' + pair[1] + '|');
    }
    fetch(baseUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            mode: "no-cors",
            data: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
};


const setUpPageVisibleContainers = () => {
    let configContainer = document.querySelector(".configuration-hint-container");
    let createCardContainer = document.querySelector(".create-card-container");

    chrome.storage.sync.get("apiToken", ({
        apiToken
    }) => {
        if (apiToken !== null && apiToken != "") {
            configContainer.classList.add("hidden");
            createCardContainer.classList.remove("hidden");
        }
    });

    chrome.storage.sync.get("lastSelectedText", ({
        lastSelectedText
    }) => {
        const wordToTranslateInput = document.getElementById("wordToTranslate");
        if (wordToTranslateInput) {
            wordToTranslateInput.value = lastSelectedText;
        }
    });
};

const addInputField = (inputButton) => {
    const containerSelector = ".input-container";
    const container = inputButton.closest(containerSelector);
    console.log("Closest container", container);
    const type = container.getAttribute("data-type");
    const inputs = container.querySelectorAll(containerSelector + " input");
    const inputCount = inputs.length;
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("name", `${type}[${inputCount}]`);
    container.insertBefore(input, inputButton);
}


document.addEventListener("DOMContentLoaded", () => {
    let configurateButton = document.getElementById("configurate-extension");
    let addInputButtons = document.querySelectorAll(".add-input");
    let submitButton = document.getElementById("create-card");

    ///LISTENERS
    if (configurateButton) {
        configurateButton.addEventListener("click", async () => {
            chrome.runtime.openOptionsPage();
        });
    }

    if (submitButton) {
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            sendVocabCard(submitButton.closest("form"));
        });
    }


    if (addInputButtons) {
        addInputButtons.forEach((inputButton) => {
            inputButton.addEventListener("click", (event) => {
                event.preventDefault();
                addInputField(event.target);
            });
        });
    }
    setUpPageVisibleContainers();
});
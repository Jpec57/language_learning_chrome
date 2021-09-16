const getApiToken = () => {
    chrome.storage.sync.get("apiToken", ({ apiToken }) => {
        document.getElementById("current-token").innerText = apiToken;
    });
}

const setApiToken = (apiToken) => {
    chrome.storage.sync.set({ apiToken });
    document.getElementById("current-token").innerText = apiToken;
}


document.addEventListener("DOMContentLoaded", ()=> {
    getApiToken();
    ///
    /// LISTENERS
    ///
    document.getElementById("submit-token").addEventListener("click", (event) => {
        event.preventDefault();
        setApiToken(document.getElementById("api-token-input").value);
    });
});


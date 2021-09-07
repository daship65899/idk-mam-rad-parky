export default class Methods {
    static API_URL = "https://wordwall.net/api/oembed?url=";
    static THUMBNAIL_URL = "https://az779572.vo.msecnd.net/screens-800/";
    static ANSWERS_URL = "https://wordwall.net/create/editcontent?guid=";

    getAnswers() {
        chrome.tabs.getSelected(null, async (tab) => {
            const response = await fetch(Methods.API_URL + tab.url);
            if (response.status !== 200) this.error();

            const data = await response.json();

            const guid = data.thumbnail_url.replace(Methods.THUMBNAIL_URL, "");
            const answers = Methods.ANSWERS_URL + guid;

            window.open(answers, "_blank");
        });
    }

    validateUrl() {
        return new Promise((resolve) => {
            chrome.tabs.getSelected(null, (tab) => {
                const url = tab.url;

                if (url.includes("wordwall.net")) resolve(true);
                else resolve(false);
            });
        });
    }

    error() {
        const element = document.querySelector(".start-btn");

        element.classList.add("error");
        element.classList.remove("start-btn");
        setTimeout(() => {
            element.classList.add("start-btn");
            element.classList.remove("error");
        }, 2000);
    }
}

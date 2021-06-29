document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("connect").addEventListener("click", auto);
    document.getElementById("help").addEventListener("click", help);

    fetch('https://schoolcheats.pxtrez.repl.co/w11ext.json')
        .then(r => r.json())
        .then(t => {
            let element = document.getElementById('version');
            element.innerHTML = t.version;
            if (t.version !== 3.0) {
                document.body.innerHTML = `
                <h1>Cheat is outdated!</h1>
                <img src="https://emoji.gg/assets/emoji/2260_sadge.png">
                <div class="normal">
                    <p class="thin">Download the latest version from my <a class="green" href=\"https://github.com/pxtrez/wordwa11\" target="_blank">github</a>!</p>
                    <p class="thin">but if u r noob, you can use emergency use</p>
                </div>
                <input class="button connect" id="connect" type="submit" value="Emergency use">
                <div class="error">
                    <div id="err_i"></div>
                </div>`
            }
        });
});

function auto() {
    chrome.tabs.getSelected(null, function(tab) {
        try {
            let url = decodeURIComponent(tab.url)
            if (url.includes('wordwall.net')) {
                if (url.includes("resource")) {
                    fetch(`https://wordwall.net/api/oembed?url=${url}&format=json`)
                        .then(r => r.json())
                        .then(data => {
                            chrome.tabs.create({
                                url: `https://wordwall.net/create/editcontent?guid=${data.thumbnail_url
                                .replace("https://az779572.vo.msecnd.net/screens-800/", "")}`
                            });
                        })
                        .catch(() => {
                            throw new Error('Unexcepted error!');
                        });
                } else if (url.includes("play")) fetch(`./inject.js`).then((e => e.text())).then((e =>
                    chrome.tabs.executeScript(null, {
                        code: e
                    })));
                else {
                    throw new Error('Cannot recognize current game mode');
                }
            } else {
                throw new Error('Invalid link!');
            }
        } catch (e) {
            let selector = document.getElementById("err_i");
            selector.innerHTML = e;
            selector.id = "err";
            selector = document.getElementById("err");
            setTimeout(() => selector.id = "err_i", 1000);
        }
    });
}

function help() {
    window.open("../help/help.html", '_blank').focus();
};
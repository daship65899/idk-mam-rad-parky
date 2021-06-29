try {
    fetch(document.head.querySelector('link[type="application/json+oembed"]').getAttribute('href'))
        .then(r => r.json())
        .then(data => window.open(`https://wordwall.net/create/editcontent?guid=${data.thumbnail_url
        .replace("https://az779572.vo.msecnd.net/screens-800/", "")}`, '_blank'))
        .catch(() => alert('Error: Unable to retreive element'));
} catch (e) {
    alert('Error: Unable to retreive element');
}
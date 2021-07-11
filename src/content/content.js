let button = `<button type="submit" class="default-btn btn wordwa11" style="background-color: forestgreen;border-radius: 10px;font-family: Quicksand;">Get answers (wordwa11)</button>`
let url = decodeURIComponent(window.location.href);

function click() {
    document.querySelector('.wordwa11').addEventListener('click', () => {
        try {
            fetch(`https://wordwall.net/api/oembed?url=${url}&format=json`)
                .then(r => r.json())
                .then(data =>
                    open(`https://wordwall.net/create/editcontent?guid=${data.thumbnail_url
                            .replace("https://az779572.vo.msecnd.net/screens-800/", "")}`)
                )
                .catch(e => {
                    console.log(e);
                    throw new Error('Fetch error, invalid data or wordwall api isn\'t responding');
                });
        } catch (e) {
            console.log(e)
            alert('Error: Unable to fetch answers');
        }
    });
}

if (url.includes('wordwall.net')) {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&amp;display=swap" rel="stylesheet">';
    if (url.includes("play")) {
        document.querySelector(".join-game")
            .innerHTML += button;
        let image = document.querySelector('.small-student-logo')
        image.src = 'https://i.imgur.com/qHFWEd9.png';
        image.style.width = "50px";
        click()

    } else if (url.includes('resource')) {
        let image = document.querySelector('#logo')
        image.style.backgroundImage = 'url("https://i.imgur.com/qHFWEd9.png")';
        image.style.backgroundSize = "contain";
        document.querySelector(".activity-title-wrapper").innerHTML += button;
        click()
    }
}
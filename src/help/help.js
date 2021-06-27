fetch('https://schoolcheats.pxtrez.repl.co/w11help')
    .then(r => {
        return r.text()
    }).then(t => {
        document.getElementById('text').innerHTML = t;
    })
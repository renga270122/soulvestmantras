// sammohana_krishna.js

window.onload = function() {
    fetch('assets/sammohana_krishna_stotram.txt')
        .then(response => response.text())
        .then(text => {
            // Split Tamil and English sections by '---' delimiter
            const [tamil, english] = text.split(/---/);
            const slokaDiv = document.getElementById('sammohana-krishna-slokas');
            let html = '';
            if (tamil) {
                html += '<h2>✨ Sammohana Krishna Stotram – Tamil</h2>';
                html += `<pre style="font-size:1.1em;line-height:2;white-space:pre-wrap;">${tamil.trim()}</pre>`;
            }
            if (english) {
                html += '<h2>✨ Sammohana Krishna Stotram – English Transliteration</h2>';
                html += `<pre style="font-size:1.1em;line-height:2;white-space:pre-wrap;">${english.trim()}</pre>`;
            }
            slokaDiv.innerHTML = html;
        })
        .catch(err => {
            document.getElementById('sammohana-krishna-slokas').innerText = 'Failed to load slokas.';
        });
};

// abhirami.js



window.onload = function() {
    fetch('assets/abhirami_andhadhi.txt')
        .then(response => response.text())
        .then(text => {
            // Split slokas by two or more consecutive newlines (LF only)
            const slokas = text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
            const allSlokasDiv = document.getElementById('all-slokas');
            let html = '<ol style="font-size:1.1em;line-height:2;">';
            for (let i = 0; i < slokas.length; i++) {
                html += `<li style="margin-bottom:2em;"><pre style="font-size:1.1em;line-height:2;white-space:pre-wrap;">${slokas[i]}</pre></li>`;
            }
            html += '</ol>';
            allSlokasDiv.innerHTML = html;
        })
        .catch(err => {
            document.getElementById('all-slokas').innerText = 'Failed to load slokas.';
        });
};

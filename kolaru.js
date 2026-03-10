// kolaru.js

window.onload = function() {
    fetch('assets/kolaru_padhigam.txt')
        .then(response => response.text())
        .then(text => {
            // Split slokas by two or more consecutive newlines (LF only)
            const slokas = text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
            const kolaruDiv = document.getElementById('kolaru-slokas');
            let html = '';
            for (let i = 0; i < slokas.length; i++) {
                const lines = slokas[i].split('\n');
                let slokaHtml = '<div style="margin-bottom:2em;"><pre style="font-size:1.1em;line-height:2;white-space:pre-wrap;">';
                lines.forEach(line => {
                    if (/^\d+\./.test(line.trim())) {
                        slokaHtml += `<strong>${line}</strong>\n`;
                    } else {
                        slokaHtml += `${line}\n`;
                    }
                });
                slokaHtml += '</pre></div>';
                html += slokaHtml;
            }
            kolaruDiv.innerHTML = html;
        })
        .catch(err => {
            document.getElementById('kolaru-slokas').innerText = 'Failed to load slokas.';
        });
};

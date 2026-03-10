// abhirami.js



window.onload = function() {
    fetch('assets/abhirami_andhadhi.txt')
        .then(response => response.text())
        .then(text => {
            // Split slokas by two or more consecutive newlines (LF only)
            const slokas = text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
            const allSlokasDiv = document.getElementById('all-slokas');
            let html = '';
            for (let i = 0; i < slokas.length; i++) {
                    const lines = slokas[i].split('\n');
                    let slokaHtml = '<div style="margin-bottom:2em;"><pre style="font-size:1.1em;line-height:2;white-space:pre-wrap;">';
                    lines.forEach(line => {
                        // Bold lines that start with a number (e.g., '1.', '2.', etc.)
                        if (/^\d+\./.test(line.trim())) {
                            slokaHtml += `<strong>${line}</strong>\n`;
                        } else {
                            slokaHtml += `${line}\n`;
                        }
                    });
                    slokaHtml += '</pre></div>';
                    html += slokaHtml;
            }
            allSlokasDiv.innerHTML = html;
        })
        .catch(err => {
            document.getElementById('all-slokas').innerText = 'Failed to load slokas.';
        });
};

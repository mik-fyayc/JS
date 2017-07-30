//Write a JS function to print a math multiplication table of size n, formatted as HTML table.
//The input comes as a single number n (0 < n < 100).

function round(n) {
    let html = '<table border="1">';
    html += '<tr><th>x</th>';

    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += '</tr>';

    for (let row = 1; row <= n; row++) {
        html += `<tr><th>${row}</th>`;
        for (let j = 1; j <= n; j++) {
            html += `<td>${j * row}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';

    document.write(html);
}

round(5);
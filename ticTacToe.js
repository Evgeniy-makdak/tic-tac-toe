const cells = document.querySelectorAll('#field td');
start(cells);

function start(cells) {
    let i = 0;

    for (let cell of cells) {
            cell.addEventListener('click', function () {
                if (i % 2 === 0 && !cell.textContent) {
                    cell.textContent = 'X';
                } else if (i % 2 !== 0 && !cell.textContent) {
                    cell.textContent = 'O';
                }
                i++;
            }, { once: true });
    }
}
onload = () => {
    box.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', box.id)
        box.classList.add('black');
    };

    box.ondragend = (e) => {
        box.classList.remove('black');
    };

    for (const z of document.querySelectorAll('.zone')) {
        z.ondragover = (e) => {
            e.preventDefault();
            z.classList.add('zone-over')
        };
        z.ondragleave = (e) => {
            e.preventDefault();
            z.classList.remove('zone-over')
        };
        /*z.ondrop = (e) => {
            e.preventDefault();
            const idBox = e.dataTransfer.getData('text/plain');
            const elem = document.getElementById(idBox);
            z.appendChild(elem);
            z.classList.remove('zone-over');
        };*/
        z.ondrop = (e) => {
            e.preventDefault();
            let arquivos = e.dataTransfer.files;
            console.log(Array.from(arquivos)
                .map(f => f.name)
                .join('\n')
            );
        }
    };
}
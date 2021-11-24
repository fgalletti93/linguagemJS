onload = () => {
    selectedFiles.onchange = () => {
        //invez de um vetor de arquivos, temos um vetor de nomes de arquivos
        /*infoFile.innerHTML = Array.from(selectedFiles.files)
            .map((f) => f.name).join('<br>'); */
        /*for (let i = 0; i < selectedFiles.files.length; i++) {
            infoFile.innerHTML += selectedFiles.files[i].name + '<br>';
            
        };*/ //vetor de aruivos


        let fr = new FileReader();
        fr.readAsText(selectedFiles.files[0], 'UTF-8');
        fr.onload = (e) => {
            photo.innerHTML = `<img src="${e.target.result}" />`
        }
    };

    btnFiles.onclick = () => {
        selectedFiles.click();

    }
};
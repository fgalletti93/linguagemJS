
/*let books = [
    { id: 1, title: 'Animal Farm', author: 'George Orwell' },
    { id: 2, title: 'Capitães da Areia', author: 'Jorge Amado' },
];*/

let db;
let reqDB = indexedDB.open('myDB', 1);

reqDB.onsuccess = () => {
    db = reqDB.result;
};
reqDB.onerror = () => {
    console.log(reqDB.error)
};

reqDB.onupgradeneeded = (e) => {
    db = reqDB.result;
    if (!db.objectStoreNames.contains('books')) {
        let booksOS = db.createObjectStore('books', { keyPath: 'id' });
        booksOS.createIndex('titleIDX', 'title', {unique: false});
        booksOS.createIndex('authorIDX', 'author', {unique: false});
    }
};

onload = () => {

    btnCREATE.onclick = () => {
        let book = {
            id: +idBook.value,
            title: title.value,
            author: author.value
        };
        let transactionDB = db.transaction(['books'], 'readwrite');
        let booksOS = transactionDB.objectStore('books');
        let reqOS = booksOS.add(book);
        reqOS.onsuccess = (e) => {
            output.innerHTML = 'This book was successfully added to your collection';
        };
        reqOS.onerror = (e) => {
            console.log(reqOS.error);
        };
    };

    btnREAD.onclick = () => {
        let transactionDB = db.transaction(['books'], 'readonly');
        let booksOS = transactionDB.objectStore('books');
        let reqOS = booksOS.get(+idBook.value); 
        reqOS.onsuccess = (e) => {
            title.value = reqOS.result.title;
            author.value = reqOS.result.author;
        };
        reqOS.onerror = (e) => {
            console.log(reqOS.error);
        };
    };

    btnDELETE.onclick = () => {
        db
            .transaction(['books'], 'readwrite')
            .objectStore('books')
            .delete(+idBook.value).onsuccess = (e) => {
                output.innerHTML = 'This book was successfully deleted from you collection';
            }
    };

    btnUPDATE.onclick = () => {
        let book = {
            id: +idBook.value,
            title: title.value,
            author: author.value
        };

        db
            .transaction(['books'], 'readwrite')
            .objectStore('books')
            .put(book).onsuccess = (e) => {
                output.innerHTML = 'This books information has been successfully changed';
            };
    };

    btnLIST.onclick = () => {
        db
            .transaction('books')
            .objectStore('books')
            .getAll(IDBKeyRange.bound(1, 5)) //only instead of bound
            .onsuccess = (e) => {
                output.innerHTML = e.target.result.map(
                    (e) => '<li>' + e.title + ' by ' + e.author
                );
            };
    };


};

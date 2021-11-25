

onmessage = function (event) {
    let soma = event.data[0] + event.data[1];
    postMessage(soma);
}
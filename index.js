import { v4 } from 'uuid';
import translate from 'translate';


onload = () => {
    output.innerHTML = `Seu ID é ${v4()}`;


    translate.engine = 'libre';
    translate.from = 'en';
    translate.to = 'pt';

    output2.innerHTML = `
        <p> 
            <input type="text" id="original" />
            <button id="traduzir">Traduzir</button>
        </p>
        <p id="traduzida"></p>
    `;

    traduzir.onclick = () => {
        translate(original.value).then((t) => (traduzida.innerHTML = t));
    }
}

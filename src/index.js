import 'whatwg-fetch';
import './styles/main.scss';
import getHtml from './utils/get-html';

async function displayWebsiteHtml(url) {
    try {
        const html = await getHtml(url);

        const div = document.createElement('div');
        div.innerHTML = encodeURI(html);

        document.body.appendChild(div);
    } catch (e) {
        console.error(e);
    }
}

displayWebsiteHtml('http://localhost:8080');

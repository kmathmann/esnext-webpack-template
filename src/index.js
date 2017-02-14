import './utils/polyfill';
import getJson from './utils/get-json';

import './styles/main.scss';

async function displayWebsiteHtml(url) {
    try {
        const data = await getJson(url);

        const $component = document.createElement('div');
        $component.classList.add('my-component');

        const $element = document.createElement('div');
        $element.classList.add('my-component__element');

        $element.innerHTML = JSON.stringify(data);

        $component.appendChild($element);
        document.body.appendChild($component);
    } catch (e) {
        console.error(e);
    }
}

displayWebsiteHtml('https://jsonplaceholder.typicode.com/posts');

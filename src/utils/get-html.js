export default async function getHtml(url) {
    try {
        const request = await fetch('http://localhost:8080');
        const result = await request.text();

        return result;
    } catch (e) {
        console.error(e);
    }
}
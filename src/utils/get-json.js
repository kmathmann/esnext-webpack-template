export default async function getJson(url) {
    try {
        const request = await fetch(url);

        return await request.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}
export default async function sendRequest() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    const q   = "Echoes of the White Giraffe";
    const a   = "+inauthor:sook nyul choi";

    const newUrl = url + q + a;
    
    try {
        const res  = await fetch(newUrl);
        const data = await res.json();
        console.log(data);
        // console.log(data.items[0].volumeInfo);
    } catch (error) {
        console.error(error);
    }
    
}
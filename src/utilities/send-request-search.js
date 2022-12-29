/*  ===========================================================================
//  send-request.js
//  ===========================================================================
//  - Sends the prepared request to the server router
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
//  none




export default async function sendRequestSearch(url) {
    // const url = "https://www.googleapis.com/books/v1/volumes?q=";
    // const q   = "Echoes of the White Giraffe";
    // const a   = "+inauthor:sook nyul choi";

    // const newUrl = url + q + a;

    try {
        const res  = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data;
        // console.log(data.items[0].volumeInfo);
    } catch (error) {
        console.error(error);
    }
    
}
/*  ===========================================================================
//  books-api-search.js
//  ===========================================================================
//  - Prepares requests to server router by setting parameters of 'sendRequestSearch'
//  - Request contains the url requested, HTTP request method, and payload
//    (if necessary)
//  - Returns servers responses back to the client (react application)
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import sendRequestSearch from "./send-request-search";




/*  ===========================================================================
//  
//  =======================================================================  */
export function searchForBook(bookInfo) {

    let query = "";

    Object.entries(bookInfo).forEach(([key, value]) => {
        // console.log(key, value);

        // skip iteration if there is no value
        if (!value) {
            return;
        }

        switch (key) {
            case "searchTerms":
                query += "q=" + value;
                break;
            case "title":
                query += "+intitle:" + value;
                break;
            case "author":
                query += "+inauthor:" + value;
                break;
            case "publisher":
                query += "+inpublisher:" + value;
                break;
            case "subject":
                query += "+subject:" + value;
                break;
            case "isbn":
                query += "+isbn:" + value;
                break;

        }

    });


    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
    const SEARCH_URL = BASE_URL + query;
    console.log(SEARCH_URL);

    return sendRequestSearch(SEARCH_URL);
}
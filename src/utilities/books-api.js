/*  ===========================================================================
//  books-api.js
//  ===========================================================================
//  - Prepares requests to server router by setting parameters of 'sendRequest'
//  - Request contains the url requested, HTTP request method, and payload
//    (if necessary)
//  - Returns servers responses back to the client (react application)
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import sendRequest from "./send-request";




const BASE_URL = '/api/books'; // express router will pass this to the controller

export function addBook(bookInfo) {
    console.log(bookInfo);
    return sendRequest(BASE_URL, 'POST', bookInfo);
}

export function getBooks() {
    return sendRequest(BASE_URL);
}

export function showBook(id) {
    // console.log(id)
    return sendRequest(`${BASE_URL}/q/${id}`);
}

export function deleteBook(id) {
    return sendRequest(`${BASE_URL}/q/${id}`, 'DELETE');
}

export function updateBook(id, bookInfo) {
    return sendRequest(`${BASE_URL}/q/${id}`, 'PUT', bookInfo);
}
import React, { Component } from 'react';
// import { render } from '@testing-library/react';

var gOTBooks = document.querySelector('ul')
interface Book {
    url: string,
    name: string,
    isbn: string,
    authors: string[],
    numberOfPages: number,
    publiser: string,
    country: string,
    mediaType: string,
    released: Date,
    characters: string[],
    povCharacters: string[],
}

export default class Books extends Component {

    constructor(props: any){
        super(props);

        this.state={
            books: []
            // update state of books when .then comes after fetch
        }
    }
updateBooks (bs:Book[]){
    this.setState({bs})
}
fetchResults(){ 
fetch('https://www.anapioficeandfire.com/api/books')
.then (function(response): Promise<Book[]> {
    return response.json()
}) 
.then ( (json) => {
    this.setState({books:json})
    for (let books of json) { 
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + books.name + books.released + '</p>';
        gOTBooks?.appendChild(listItem)
    }
})
} 
componentDidMount () {
    this.fetchResults()
}
render() {
    return(
        <div>
            <p>
               
            </p>
        </div>
    )
}}
// interface expects properties
// fetch url - dig into w/ string concantination
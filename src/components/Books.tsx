import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
// import 'fontsource-roboto';
// import { render } from '@testing-library/react';

//CARDS CODE
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



interface BookProps {
    
}

interface Book {
    url: string,
    name: string,
    isbn: string,
    authors: string[],
    numberOfPages: number,
    publiser: string,
    country: string,
    mediaType: string,
    released: string,
    characters: string[],
    povCharacters: string[],
}

export default class Books extends Component <BookProps, {books: Book []}> {

    constructor(props: any){
        super(props);

        this.state={
            books: []
            // update state of books when .then comes after fetch
        }
    }

// updateBooks (bs:Book[]){
//     this.setState({books:bs})
// }
fetchResults(){ 
fetch('https://www.anapioficeandfire.com/api/books')
.then (function(response): Promise<Book[]> {
    return response.json()
}) 
.then ( (json) => {
    this.setState({books:json})
})
} 
componentDidMount () {
    this.fetchResults()
}
render() {
    return(
        <Card variant="outlined">
            <CardContent>
        <div>
            <Typography color="textSecondary" gutterBottom>
            <p>
               Books
            </p>
            </Typography>
            <Container fixed>
            <ul
            style={{listStyleType:"none"}}>
                {this.state.books.map((book, index) =>{
                    return(
                        <div
                        style={{display:"inline-block", border:"1px solid grey"}}>
                            <li>
                            <Typography variant="h5" component="h2">
                                {book.name}
                            </Typography>
                            <br/>
                            <Typography variant="h5" component="h2">
                                {book.released.substring(0,10)}
                            </Typography>
                            <br/>
                            <Typography variant="body2" component="p">
                                ISBN: {book.isbn}
                            </Typography>
                            </li>
                        </div>
                )})}
            </ul>
            </Container>
        </div>
            </CardContent>
            </Card>
    )
}}
{/* // use SPANS to design the objects
// interface expects properties
// fetch url - dig into w/ string concantination */}
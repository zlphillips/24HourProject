import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
// import { render } from '@testing-library/react';
//CARDS CODE
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import borderBird from '../assets/centerBird.png'


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
    <div>
    {/* style={{
        borderImage: `url(${borderBird})`,
        backgroundSize:"cover",
        height:"500px",
        paddingTop:"150px",
        backgroundPosition:"center"
    }}> */}
        <h1
        style={{textAlign:"center", color:"white"}}>
            Books
        </h1>
        {this.state.books.map((book, index) =>{
            return(
                <Card
                style={{
                    display:"inline-block",
                    margin:"30px",
                    width:"15%",
                    height:"40%",
                    alignContent:"flex-start",
                    color:"#B51C17",
                    textShadow:"5px 2px 4px black",
                }}>
                    {/* #F2D442 #1F77B2*/}
                <CardContent>                                          
                <div
                style={{
                    textAlign:"center",
                    backgroundImage: `url(${borderBird})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    backgroundSize:'160px 160px',
                }}>
                <Typography variant="h5" component="h2">
                    {book.name}
                </Typography>
                <Typography variant="body1" component="p">
                    Release Date:
                    <br/>{book.released.substring(0,10)}
                </Typography>
                <Typography variant="body1" component="p">                           
                    ISBN: {book.isbn}
                </Typography>
                </div>
                </CardContent>   
                </Card>
            )})}
        </div>
    )
}}

{/* // use SPANS to design the objects
// interface expects properties*/}

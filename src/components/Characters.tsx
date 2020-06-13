import React, {Component} from 'react';


interface Character {
    name: string,
    gender: string,
    born: Date,
    died: Date,
    aliases: string
}

interface CharactersProps{

}

interface CharactersState{
    characters: Array<Character>
}

class Characters extends Component <CharactersProps, CharactersState>{
   constructor(props: CharactersProps){
       super(props);
       this.state = {
            characters: []
       } 

   }

     fetchResults(){
        fetch("https://www.anapioficeandfire.com/api/characters")
        .then((results) => results.json())
        .then((results) => this.setState({
            characters: results
        }))
    }
    

    componentDidMount() {
        setTimeout(() => {
          this.fetchResults();
        }, 1000);
      }
    
    render() {
        return(
            <div>
                <h1>Characters</h1>
            </div>
        )
    }
}

export default Characters
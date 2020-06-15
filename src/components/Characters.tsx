import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import './Characters.css';
import { white } from 'color-name';

const cardStyles = {
  display: 'inline-block',
  margin: '50px',
  width: '30%',
  height: '20%',
  color: '#bed0ed',
}

interface Character {
    name: string,
    gender: string,
    born: string,
    died: string,
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
    Promise.all([
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=1&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=2&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=3&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=4&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=5&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=6&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=7&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=8&pageSize=50`),
    fetch(`https://www.anapioficeandfire.com/api/characters/?page=9&pageSize=50`)
    ])
    .then(function (responses) {
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
    
    }).then((data) => {
       this.setState ({characters:data.flat()})
    })
    .catch(function (error) {
      console.log(error);
      });

}

 
    

    componentDidMount() {
        setTimeout(() => {
          this.fetchResults();
        }, 1000);
      }
    
    render() {
        return( 
            <div>
              <div className='bgcolor'>
                <h1 style={{color: '#bed0ed'}}>Dead characters</h1>
                <h4 style={{color: '#bed0ed'}}>*WARNING: SPOILERS AHEAD*</h4>
                </div>
                {this.state.characters.map((character, index) => {
                  if(character.born && character.died){
                  return (
                    <Card className ='bgphoto' style={cardStyles}>
                      <CardContent >
                        <Typography variant="h5" component="h2">
                        {character.name && (character.aliases.length > 0 && character.aliases[0]) ? `${character.name}, otherwise known as ${character.aliases[0]} ` : 
                            character.name ? character.name : character.aliases[0]
                        }
                        </Typography>
                        <Typography >
                        {`Gender: ${character.gender}`}
                          <br/>
                        {character.born && character.died ? `Character Birthdate: ${character.born}` : `Character Birthdate: unknown`}
                        <br />
                        {character.died ? `Character Deathdate: ${character.died}` : `Character Deathdate: unknown`}
                        </Typography>
                      </CardContent>
                    </Card>
            )
          }})}
            </div>
            
        )
    }
}

export default Characters
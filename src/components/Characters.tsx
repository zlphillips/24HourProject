import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const cardStyles = {
  display: 'inline-block',
  margin: '50px',
  width: '30%',
  height: '20%',
}

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
        fetch("https://www.anapioficeandfire.com/api/characters/?page=1&pageSize=50")
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
                {this.state.characters.map((character, index) => {
                  return (
                    <Card style={cardStyles}>
                      <CardContent >
                        <Typography color="textSecondary" gutterBottom>
                        {character.name ? `${character.name}, otherwise known as ${character.aliases[0] } ` : character.aliases[0]}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        </Typography>
                        <Typography  color="textSecondary">
                          {}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {`Gender: ${character.gender}`}
                          <br/>
                        {character.born ? `Character Birthdate: ${character.born}` : `Character Birthdate: unknown`}
                        <br />
                        {character.died ? `Character Deathdate: ${character.died}` : `Character Birthdate: unknown`}
                        </Typography>
                      </CardContent>
                    </Card>
            )
          })}
            </div>
            
        )
    }
}

export default Characters
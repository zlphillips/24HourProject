import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { url } from 'inspector';
import { notStrictEqual } from 'assert';

const cardStyles = {
    color: '#ffffff',
    display: 'inline-block',
    margin: '50px',
    width: '25%',
    height: '20%'
  }

interface House {
    name: string,
    region: string,
    words: string,
    titles: string,
}
interface HousesProps{
}
interface HousesState{
    houses:  Array<House>
}

class Houses extends Component <HousesProps, HousesState> {
   constructor(props: HousesProps){
       super(props);
       this.state = {
            houses: []
       } 
   }

      fetchHouses(){
        Promise.all([
        fetch(`https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=2&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=3&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=4&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=5&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=6&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=7&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=8&pageSize=50`),
        fetch(`https://www.anapioficeandfire.com/api/houses?page=9&pageSize=50`)
        ])
        .then(function (responses) {
		    return Promise.all(responses.map(function (response) {
          return response.json();
        }));
        
        }).then((data) => {
           this.setState ({houses:data.flat()})
        })
        .catch(function (error) {
		      console.log(error);
	        });

    }
    componentDidMount() {
        setTimeout(() => {
          this.fetchHouses();
        }, 1000);
      }
    render() {
        return(
            <div>
                <h1 style={{color: '#ffffff'}}>Houses</h1>
                {this.state.houses.map((house, index) => {
                if (house.words && house.titles[0]) {
                  return (
              <Card style={cardStyles} className="card">
                <CardContent >
                <Typography variant="h5" component="h2">
                    {house.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom style={{color: '#ffffff'}}>
                  "{house.words}"
                  </Typography>
                  <Typography  color="textSecondary">
                    {}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {`Reigns from: ${house.region}`}
                    <br/>
                  Holds title of: {house.titles[0]}
                  <br />
                  </Typography>
                </CardContent>
              </Card>
            )
          }})}
            </div>
            
        )
    }
}
export default Houses;


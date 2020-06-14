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
    founded: string,
    titles: string,
    seats: string,
    ancestralWeapons: string
}
interface HousesProps{
}
interface HousesState{
    houses: Array<House>
}

class Houses extends Component <HousesProps, HousesState> {
   constructor(props: HousesProps){
       super(props);
       this.state = {
            houses: []
       } 
   }

     fetchHouses(){
        fetch(`https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50`)
        .then((results) => results.json())
        .then((results) => this.setState({
            houses: results
        }))

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
                  {house.words}
                  </Typography>
                  <Typography  color="textSecondary">
                    {}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {`Reigns from: ${house.region}`}
                    <br/>
                  {house.titles[0]}
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


import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

interface House {
    name: string,
    region: string,
    words: string,
    founded: string,
    currentLord: string,
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
        fetch("https://www.anapioficeandfire.com/api/houses/?page=1&pageSize=50")
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
                <GridList cellHeight={180}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <h1>Houses</h1>
                    </GridListTile>
                        {this.state.houses.map((house, index) => (
                        <GridListTile key={house.name} className="tile">
                        <h3>{house.name}</h3>
                        <p>Reigns from: {house.region}</p>
                        <p>{house.words}</p>

                        </GridListTile> 
                        ))}
                </GridList>
            </div>
        )
    }
}
export default Houses;


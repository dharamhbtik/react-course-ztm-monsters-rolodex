import { Component } from 'react';
import './card-list.styles.css';
import Card from './card/card.component';

class CardList extends Component{

    render(){
        const {monsters} = this.props;
        return (<div  className='card-list'>
              
                {monsters.map((m)=>{
                   
                    return (
                        <Card key={m.id} monster={m} />
                    )
                }
                )}
                </div>);
            
            
    }
}
export default CardList;
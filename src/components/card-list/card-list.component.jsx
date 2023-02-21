import {Component} from "react";
import Card from "../card/card.component";
import './card-list.styles.css'

class CardList extends Component {

    render() {
        const {monsters} = this.props;
        return (
            // Component mast have a parent tag
            <div className='cardList'>
                {
                    monsters.map((monster, index) => {
                        return (
                            <Card item={monster} index={index} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;
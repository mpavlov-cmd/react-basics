import {Component} from "react";
import './card.styles.css'

class Card extends Component {

    render() {
        const {name, email, id} = this.props.item;
        const index = this.props.index;

        return (
            <div key={id} id={'monster' + index} className='cardContainer'>
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;
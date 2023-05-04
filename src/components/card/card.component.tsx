import './card.styles.css'
import {Monster} from "../../App";

type CardProps = {
    index: number
    monster: Monster
}

const Card = ({monster, index}: CardProps) => {

    const {name, email, id} = monster;

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

export default Card;
import Card from "../card/card.component";
import './card-list.styles.css'
import {Monster} from "../../App";


type CardListProps = {
    monsters: Monster[],
}

const CardList = ({monsters}: CardListProps) =>
    (
        // Component mast have a parent tag
        <div className='cardList'>
            {
                monsters.map((monster, index) => {
                    return (
                        <Card key={monster.id} monster={monster} index={index}/>
                    )
                })
            }
        </div>
    )

export default CardList;
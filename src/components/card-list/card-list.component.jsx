import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({monsters}) =>
    (
        // Component mast have a parent tag
        <div className='cardList'>
            {
                monsters.map((monster, index) => {
                    return (
                        <Card key={monster.id} item={monster} index={index}/>
                    )
                })
            }
        </div>
    )

export default CardList;
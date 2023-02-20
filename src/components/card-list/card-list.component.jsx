import {Component} from "react";

class CardList extends Component {

    render() {

        const {monsters} = this.props;

        return (
            // Component mast have a parent tag
            <div className='cardList'>
                {
                    monsters.map((monster, index) => {
                        return (
                            <div key={monster.id} id={'monster' + index}>
                                <h1 className="monsterHeading">{monster.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;
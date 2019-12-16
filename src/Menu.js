import React from 'react';



class Menu extends React.Component {

    render() {
        return (
            <div className="menu">
              {this.props.items.map(pokemon => (
                <h4 key={pokemon.name} onClick={() => this.props.selectItem(pokemon)}>{pokemon.name}</h4>
              ))}
            </div>
        );
    }
}

export default Menu;
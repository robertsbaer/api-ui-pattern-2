import React from 'react';



class Menu extends React.Component {

    render() {
        return (
            <div className="menu">
              {this.props.items.map(pokemon => (
                <button key={pokemon.name} onClick={() => this.props.selectItem(pokemon)}>{pokemon.name}</button>
              ))}
            </div>
        );
    }
}

export default Menu;
import './Header.css';
import React from 'react';

class Header extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
            <h1>Álbum de Fotos</h1>
            <div className="field">
            <input type="text" placeholder="Pequisar..." value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
            </div>
            </form>
            );
    }
}

export default Header;
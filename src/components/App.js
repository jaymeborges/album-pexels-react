import React from 'react';
import pexels from '../api/pexels';
import Header from './Header';
import ImageList from './ImageList';
import Footer from './Footer';


class App extends React.Component {
    state = { photos: [] };

    onSearchSubmit = async (term) => {
        const response = await pexels.get(`/v1/search`, {
            params: {
               query: term,
                per_page: 15,
                page: 1
            }
        });

        this.setState({ photos: response.data.photos });
    }

    render() {
    return (
    <div className="container">
        <Header onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.photos} />
        <Footer/>
    </div>
    );
    }; 
}

export default App;
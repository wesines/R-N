import React from 'react';
import { Carousel } from './components/Caroussel';
import ExploreTopBooks from './components/ExploreTopBooks';
import { Heros } from './components/Heros';
import { LibraryServices } from './components/LibraryServices';

export const HomePage=()=> {
    return (
        <div>
            <ExploreTopBooks/>
            <Carousel />
            <Heros/>
            <LibraryServices/>
        </div>
    );
}

export default HomePage;
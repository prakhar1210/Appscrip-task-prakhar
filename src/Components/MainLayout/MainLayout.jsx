import React from 'react';
import Filter from '../FilterMenu/Filter';
import ProductList from '../ProductCard/ProductCard';
import './Mainlayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <div className="filter-container">
                <Filter />
            </div>
            <div className="product-list-container">
                <ProductList />
            </div>
        </div>
    );
};

export default MainLayout;

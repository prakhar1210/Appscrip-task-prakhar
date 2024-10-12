// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ProductCard.css'; // Ensure this file exists for CSS styles
// // import './ProductList.css'; // Create this file for grid layout styles

// const ProductList = () => {
//     const [products, setProducts] = useState([]); // Initialize as an array
//     const [loading, setLoading] = useState(true); // Add loading state

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('https://fakestoreapi.com/products');
//                 setProducts(response.data); // Set products array
//             } catch (error) {
//                 console.error('Error fetching product data:', error);
//             } finally {
//                 setLoading(false); // Set loading to false after the fetch is done
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) return <div>Loading...</div>; // Show loading indicator while fetching
//     if (products.length === 0) return <div>No products found.</div>; // Handle case where no products are found

//     return (
//         <div className="product-list">
//             {products.map((product) => (
//                 <div className="product-card" key={product.id}>
//                     <img src={product.image} alt={product.title} className="product-image" />
//                     <div className="product-details">
//                         <h3 className="product-title">{product.title}</h3>
//                         <p className="product-price">${product.price.toFixed(2)}</p>
//                         <p className="product-description">{product.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductCard.css'; // Ensure this file exists for CSS styles
import "./ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]); // Initialize as an array
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data); // Set products array
            } catch (error) {
                console.error('Error fetching product data:', error);
            } finally {
                setLoading(false); // Set loading to false after the fetch is done
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>; // Show loading indicator while fetching

    if (products.length === 0) return <div>No products found.</div>; // Handle case where no products are found

    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-details">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <p className="product-description">{product.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

const initialProducts = [];

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts);

    const addItem = (newProduct) => {
        setProducts((prevProducts) => {
            const isProductExist = prevProducts.some(product => product.id === newProduct.id);
            if (isProductExist) {
                return prevProducts;
            }
            return [...prevProducts, newProduct];
        });
    };

    const removeItem = (productId) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
    };

    const isInCart = (item) => {
        return products.some(product => product.id === item.id);
    };

    const getTotalCartValue = () => {
        return products.reduce((total, product) => total + product.price, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ products, addItem, removeItem, isInCart, getTotalCartValue }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
}
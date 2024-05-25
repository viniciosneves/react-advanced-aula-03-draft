import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

const initialProducts = [
    {
        id: 1,
        name: "Woman Sleeve 003",
        imageSrc: "/products/woman-short-sleeve-003.png",
        price: 79.99,
        size: "XL",
        color: "Blue"
    },
    {
        id: 2,
        name: "Men Shirt 001",
        imageSrc: "/products/men-shirt-001.png",
        price: 89.99,
        size: "L",
        color: "Gray"
    },
];

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts);

    return (
        <CartContext.Provider value={{ products }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
}
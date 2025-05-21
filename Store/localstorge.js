const Cart_Key = 'my-cart'
export const loadCart = () => {
    try {
        const data = localStorage.getItem(Cart_Key);
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error(err);
    }
}
export const saveCart = (cart) => {
    try {
        localStorage.setItem(Cart_Key, JSON.stringify(cart));
    } catch (err) {
        console.error(err);
    }
}
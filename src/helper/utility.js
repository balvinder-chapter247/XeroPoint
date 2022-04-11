let cartData = JSON.parse(localStorage.getItem("cart"));
export const checkCart = (id) => {
    // debugger
    return cartData.filter(item => item.id.includes(id))
}

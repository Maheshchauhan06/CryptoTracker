
export const addlist = ({id, coin, value, setvalue})=>{
    setvalue([
        {
            id:id,
            name:coin.name,
            img: coin.image,
            price:coin.current_price.toLocaleString(),
        },...value
    ])


}
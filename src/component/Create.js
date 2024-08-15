import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function Create() {
    let [id,setId] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("")
    const navigate = useNavigate()
    const changeName = (event) =>{
        let dataName = event.target.value;
        setName(dataName);
    }
    const changePrice = (event) =>{
        let dataPrice = event.target.value
        setPrice(dataPrice)
    }
    const changeQuantity = (event) =>{
        let dataQuantity = event.target.value
        setQuantity(dataQuantity)
    }
    const Submit = () => {
        let Product = {
            name:name,
            price:price,
            quantity:quantity
        }
        axios.post('http://localhost:3000/products',Product).then (() =>{
            alert(' Thêm thành công')
            navigate('/products/list')
        })
    }
    return(
        <>
<h1>Create Product</h1>
            <input value={name} placeholder="Name" onChange={(event) =>{changeName(event)}}/>
            <input value={price} placeholder="Price" onChange={(event) =>{changePrice(event)}}/>
            <input value={quantity} placeholder="Quantity" onChange={(event) =>{changeQuantity(event)}}/>
            <button onClick={() =>{Submit()}}>submit</button>
        </>
    )
}
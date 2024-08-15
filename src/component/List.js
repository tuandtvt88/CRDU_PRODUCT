import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function List(){
    let [product, setProduct] = useState([])
    const getList = () =>{
        axios.get('http://localhost:3000/products').then((res) =>{
            let data = res.data;
            setProduct(data)
        })
    }
    useEffect(() =>{
        getList()
    },[]);
    const remove = (id) => {
        let isConfirm = window.confirm("Are you sure")
        if(isConfirm){
            axios.delete(`http://localhost:3000/products/${id}`).then((res) =>{
                alert("Deleted")
                getList()
            })
        }
    }
    return(
        <>
            <table border='1px'>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td colSpan={2}>Delete and Update</td>
                </tr>
                {
                    product.map((item) =>(
                        <>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button onClick={() =>{remove(item.id)}}>Delete</button></td>
                            <td><Link to={`/products/update/${item.id}`}>Update</Link></td>
                        </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}
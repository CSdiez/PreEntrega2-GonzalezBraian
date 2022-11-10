import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList";
import './styles.css';
import {PuffLoader} from "react-spinners"

export default function ItemListContainer() {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        ( async  () => {

        try{
            console.log(categoryId)
            let response = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters/')
            const data = await response.json()
            if(categoryId){
                setProducts(data.filter( p => p.name === categoryId))
                }else{
                    setProducts(data)
                }
    
            
        } catch (error) {
            console.log(error)
        }
        })()
    }, [categoryId])

    return (<>{products.length ? <ItemList products={products}/> : <PuffLoader className="spinner"/>}</>)
}
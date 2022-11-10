import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail";
import './styles.css';
import {PuffLoader} from "react-spinners"


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

       
    const getCharacterDetail = async () => {    
        const response = await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${id}`)
        const character = await response.json()
        setCharacter(character)
    }
        getCharacterDetail()
    }, [id])

    return (character ? <ItemDetail character={character}/> : <PuffLoader className="spinner"/>)
};

export default ItemDetailContainer;
import ItemDetail from "./ItemDetail"
import { getFetch } from "../../services/getFetch"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading,setLoading] = useState(true)
    const {detalleID} = useParams()

    useEffect(() =>{

        // Reviso si categoria tiene un valor o si no esta definido
        if(detalleID){
            // Llamo a la promesa
            getFetch

            .then(res =>{
                setItem(res.filter(prod => prod.id === detalleID))
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            // Llamo a la promesa
            getFetch

            .then(res =>{
                setItem(res)
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[detalleID]) //Agrego dependencia que detecte el cambio y dispare el useEffect

    return (
        <>
            {loading ?
                    <h2>Cargando...</h2>
                :
                    <div>
                        <ItemDetail item={item} />
                    </div>
            }
        </>
    )
}

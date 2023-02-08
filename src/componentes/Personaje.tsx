import { useAddFavoritoMutation, useDeleteFavortioMutation, useGetFavoritosQuery } from '../services/favoritos.services'
import IPersonaje from '../types/personaje.types'

interface Props {
    data: IPersonaje
}
const Personaje = ({data}: Props) => {
    const [ addFavorito ] = useAddFavoritoMutation()
    const [ deleteFavorito ] = useDeleteFavortioMutation()
    const { data: favlist } = useGetFavoritosQuery("")
    
    //Buscamos si el personaje ya esta en la lista de favoritos -> 
    // -> si ya esta añadido, usamos su id para eliminarlo de la lista
    // -> si no esta añadido, lo agregamos a la lista con el name correspondiente
    const personajeFav = favlist?.items.find(fav => fav.name ===  data.name)

    const handleClick = ()=>{
        personajeFav
         ? deleteFavorito(personajeFav?.id)
         : addFavorito(data.name)
    }

  
    return (
    <div key={data.id} style={{display: "flex", flexDirection: "column", alignItems:"center", marginBottom: "20px"}}>
                <label style={{marginBottom: 5}}>Nombre: {data.name}</label>
                <img src={data.image} alt="personaje"/>
                <button onClick={handleClick} >{
                    personajeFav ? "eliminar favorito" : "añadir favorito" 
                } </button>
            </div>
  )
}

export default Personaje
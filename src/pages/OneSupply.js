import { useParams} from "react-router-dom"

const OneSupply = ({supplies, edit , deleteSupply}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const supply = supplies.find((supply) => supply.id === id)


    return (
        <div className="viewpage">
            <button onClick={(event) => edit(supply)}>Edit Supply</button>
            <button onClick={(event) => deleteSupply(supply)}>Delete Supply</button>
            <h2>Brand: {supply.brand}</h2>
            <h2>Type: {supply.type}</h2>
            <h2>Ink: {supply.ink}</h2>
            <img src={supply.image} alt=""/>
        </div>
    )
}

export default OneSupply
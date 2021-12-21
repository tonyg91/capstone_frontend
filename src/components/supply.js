import {Link} from "react-router-dom"

const Supply = ({supply}) => {
    return (
        <div>
            <img src={supply.image} alt="supplypic"/>
            <Link to={`/supply/${supply.id}`}>
                <h1>Brand: {supply.brand}</h1>
            </Link>
            <h4>Type: {supply.type}</h4>
        </div>
    )
}
export default Supply
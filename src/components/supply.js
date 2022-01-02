import {Link} from "react-router-dom"

const Supply = ({supply}) => {
    return (
        <div className="supply">
            <Link to={`/supply/${supply.id}`}>
            <img src={supply.image} alt="supplypic"/>
            </Link>
            
        </div>
    )
}
export default Supply
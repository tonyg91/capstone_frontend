import {Link} from "react-router-dom"

const Theme = ({theme}) => {
    return (
        <div className="theme">
            <Link to={`/theme/${theme.id}`}>
                <img src={theme.image} alt="themepic"/>
            </Link>
        </div>
    )
}
export default Theme
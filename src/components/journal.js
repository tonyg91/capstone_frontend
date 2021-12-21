import {Link} from "react-router-dom"

const Journal = ({ journal }) => {

    return (
        <div>
            <img src={journal.image} alt="journalpic"/>
            <Link to={`/journal/${journal.id}`}>
                <h1>Brand: {journal.brand}</h1>
            </Link>
            <h4>Sizes: {journal.sizes}</h4>
        </div>
    )
}

export default Journal
import {Link} from "react-router-dom"

const Journal = ({ journal }) => {

    return (
        <div className="container"> 
            <Link to={`/journal/${journal.id}`}>
              <img src={journal.image} alt="journalpic"/>
            </Link>
            <h1>Brand: {journal.brand}</h1>
        </div>
    )
}

export default Journal
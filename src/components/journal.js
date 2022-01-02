import {Link} from "react-router-dom"

const Journal = ({ journal }) => {

    return (
        <div className="container"> 
            <div className="grid-item">
             <Link to={`/journal/${journal.id}`}>
              <img src={journal.image} alt="journalpic"/>
             </Link>
             
            </div>
        </div>
    )
}

export default Journal
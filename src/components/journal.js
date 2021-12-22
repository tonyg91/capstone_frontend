import {Link} from "react-router-dom"

const Journal = ({ journal }) => {

    return (
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src={journal.image} alt="journalpic"/>
              <Link to={`/journal/${journal.id}`}>
                <h1>Brand: {journal.brand}</h1>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default Journal
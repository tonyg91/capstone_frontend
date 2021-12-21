import { useParams} from "react-router-dom"

const OneJournal = ({journals, edit, deleteJournal}) => {

    const params = useParams()
    const id = parseInt(params.id)
    const journal = journals.find((journal) => journal.id === id)

    return (
        <div>
            <button onClick={(event) => edit(journal)}>Edit Journal</button>
            <button onClick={(event) => deleteJournal(journal)}>Delete Journal</button>
            <h1>Brand: {journal.brand}</h1>
            <h3>Paper Weight: {journal.paperweight}</h3>
            <h3>Sizes: {journal.sizes}</h3>
            <h3>Pages: {journal.pages}</h3>
            <img src={journal.image} alt="journalpic"/>
        </div>
    )
}

export default OneJournal
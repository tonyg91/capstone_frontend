import Journal from "../components/journal"

const AllJournals = (props) => {
    return props.journals.map((journal) => <Journal journal={journal} key={journal.id}/>)
}
export default AllJournals
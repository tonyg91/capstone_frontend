import Supply from "../components/supply"

const AllSupplies = (props) => {
    return props.supplies.map((supply) => <Supply supply={supply} key={supply.id}/>)
}

export default AllSupplies
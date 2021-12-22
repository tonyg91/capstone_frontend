import Journal from "../components/journal"
import Supply from "../components/supply"
import Theme from "../components/theme"

const Home = (props) => {
    const journal = props.journals.map((journal) => <Journal journal={journal} key={journal.id}/>)
    const supply = props.supplies.map((supply) => <Supply supply={supply} key={supply.id}/>)
    const theme = props.themes.map((theme) => <Theme theme={theme} key={theme.id}/>)
    
    return(
        <div className="home">
            <div className="scrollmenu">
             <h3>{journal}</h3>
            </div>
            <div className="scrollmenu">
             <h3>{supply}</h3>
            </div>
            <div className="scrollmenu">
             <h3>{theme}</h3>
            </div>
        </div>
    )
}

export default Home
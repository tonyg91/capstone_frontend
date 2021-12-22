import Journal from "../components/journal"
import Supply from "../components/supply"
import Theme from "../components/theme"

const Home = (props) => {
    const journal = props.journals.map((journal) => <Journal journal={journal} key={journal.id}/>)
    const supply = props.supplies.map((supply) => <Supply supply={supply} key={supply.id}/>)
    const theme = props.themes.map((theme) => <Theme theme={theme} key={theme.id}/>)
    
    return(
        <div className="home">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                 <div class="carousel-item active">
                     <img src="https://i.pinimg.com/564x/41/61/ae/4161aeea0fbbaf943f968159e7525685.jpg" class="d-block w-100" alt="..."/>
                 </div>
                 <div class="carousel-item">
                     <img src="https://mashaplans.com/wp-content/uploads/2019/10/D6B3D5AB-CE39-4690-A25C-73ABB14DAA1F.jpeg" class="d-block w-100" alt="..."/>
                 </div>
                 <div class="carousel-item">
                     <img src="https://littlecoffeefox.com/wp-content/uploads/2020/05/IMG_3283-1024x1024.jpg" class="d-block w-100" alt="..."/>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Home
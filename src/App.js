import AllJournals from "./pages/AllJournals";
import OneJournal from "./pages/OneJournal";
import AllSupplies from "./pages/AllSupplies";
import OneSupply from "./pages/OneSupply"
import AllThemes from "./pages/AllThemes"
import OneTheme from "./pages/OneTheme"
import Formj from "./pages/Form"
import Forms from "./pages/Forms";
import Formt from "./pages/Formt"
import Home from "./pages/Home";
import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom"
import {Link, useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate()
  ///////////////
  // State & Other Variables
  ///////////////
  const jurl = "https://ag-backend-capstone.herokuapp.com/journal/"
  const surl = "https://ag-backend-capstone.herokuapp.com/supply/"
  const turl = "https://ag-backend-capstone.herokuapp.com/theme/"

  const [journals, setJournals] = useState([])
  const [supplies, setSupplies] = useState([])
  const [themes,  setTheme] = useState([])

  const nullJournal = {
    brand: "",
    paperweight: "",
    sizes: "",
    pages: "",
    image: "",
  }

  const nullSupply = {
    brand: "",
    type: "",
    ink: "",
    image: "",
  }

  const nullTheme = {
    image: "",
    pagelayout: "",
    creator: "",
  }

  const [targetJournal, setTargetJournal] = useState(nullJournal)
  const [targetSupply, setTargetSupply] = useState(nullSupply)
  const [targetTheme, setTargetTheme] = useState(nullTheme)
  /////////////////////
  // Functions Journals
  /////////////////////
  const getJournals = async () => {
    const response = await fetch(jurl)
    const data = await response.json()
    setJournals(data)
  }

  const addJournal = async (newJournal) => {
    await fetch(jurl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJournal),
    });
    getJournals()
  }

  const getTargetJournal = (journal) => {
    setTargetJournal(journal)
    navigate("/edit/journal")
  }

  const updateJournal = async (journal) => {
    await fetch(jurl + journal.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(journal),
    });
    getJournals();
  };

  const deleteJournal = async (journal) => {
    await fetch(jurl + journal.id + "/", {
      method: "delete",
    });
    getJournals();
    navigate("/journal");
  };

  /////////////////////
  // Functions Supply
  /////////////////////
  const getSupply = async () => {
    const response = await fetch(surl)
    const data = await response.json()
    setSupplies(data)
  }

  const addSupply = async (newSupply) => {
    await fetch(surl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSupply),
    });
    getSupply()
  }

  const getTargetSupply = (supply) => {
    setTargetSupply(supply)
    navigate("/edit/supply")
  }

  const updateSupply = async (supply) => {
    await fetch(surl + supply.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supply),
    });
    getSupply();
  };

  const deleteSupply = async (supply) => {
    await fetch(surl + supply.id + "/", {
      method: "delete",
    });
    getSupply();
    navigate("/supply");
  };
  /////////////////////
  // Functions Themes
  /////////////////////
  const getTheme = async () => {
    const response = await fetch(turl)
    const data = await response.json()
    setTheme(data)
  }

  const addTheme = async (newTheme) => {
    await fetch(turl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTheme),
    });
    getTheme()
  }

  const getTargetTheme = (theme) => {
    setTargetTheme(theme)
    navigate("/edit/theme")
  }

  const updateTheme = async (theme) => {
    await fetch(turl + theme.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theme),
    });
    getTheme();
  };

  const deleteTheme = async (theme) => {
    await fetch(turl + theme.id + "/", {
      method: "delete",
    });
    getTheme();
    navigate("/theme");
  };
  //////////////
  // useEffects
  //////////////
  useEffect(() => {
    getJournals()
    getSupply()
    getTheme()
  }, [])
  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <nav>
        <h1>All Things Bullet Journal</h1>
        <Link to="/">Home</Link>
        <Link to="/journal">Journals</Link>
        <Link to="/supply">Supply</Link>
        <Link to="/theme">Theme</Link>
      </nav>
      
      <Link to="/new/journal"><button>Add Journal</button></Link>
      <Link to="/new/supply"><button>Add Supply</button></Link>
      <Link to="/new/theme"><button>Add Theme</button></Link>

      <Routes>
        <Route path="/" element={<Home journals={journals} supplies={supplies} themes={themes}/>}/>
        <Route path="/journal" element={<AllJournals journals={journals}/>}/>
        <Route path="/journal/:id" element={<OneJournal journals={journals} edit={getTargetJournal} deleteJournal={deleteJournal}/>}/>
        <Route path="/new/journal" element={<Formj initialJournal={nullJournal} handleSubmit={addJournal} buttonLabel="Create Journal"/>}/>
        <Route path="/edit/journal" element={<Formj initialJournal={targetJournal} handleSubmit={updateJournal} buttonLabel="Update Journal"/>}/>

        <Route path="/supply" element={<AllSupplies supplies={supplies}/>}/>
        <Route path="/supply/:id" element={<OneSupply supplies={supplies} edit={getTargetSupply} deleteSupply={deleteSupply}/>}/>
        <Route path="/new/supply" element={<Forms initialSupply={nullSupply} handleSubmit={addSupply} buttonLabel="Create Supply"/>}/>
        <Route path="/edit/supply" element={<Forms initialJournal={targetSupply} handleSubmit={updateSupply} buttonLabel="Update Supply"/>}/>

        <Route path="/theme" element={<AllThemes themes={themes}/>}/>
        <Route path="/theme/:id" element={<OneTheme themes={themes} edit={getTargetTheme} deleteTheme={deleteTheme}/>}/>
        <Route path="/new/theme" element={<Formt initialTheme={nullTheme} handleSubmit={addTheme} buttonLabel="Create Theme"/>}/>
        <Route path="/edit/theme" element={<Formt initialTheme={targetTheme} handleSubmit={updateTheme} buttonLabel="Update Supply"/>}/>
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;

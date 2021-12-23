import { useParams } from "react-router-dom";

const OneTheme = ({themes, edit, deleteTheme}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const theme = themes.find((theme) => theme.id === id)

    return(
        <div className="viewpage">
          <button onClick={(event) => edit(theme)}>Edit Theme</button>
          <button onClick={(event) => deleteTheme(theme)}>Delete Theme</button>
          <h2>Page Layout: {theme.pagelayout}</h2>
          <h2>Creator: {theme.creator}</h2>
          <img src={theme.image} alt="themepic"/>
        </div>
    )
}
export default OneTheme
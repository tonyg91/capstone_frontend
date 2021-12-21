import Theme from "../components/theme"

const AllThemes = (props) => {
    return props.themes.map((theme) => <Theme theme={theme} key={theme.id}/>)
}
export default AllThemes
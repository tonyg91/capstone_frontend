import {useState} from "react"
import {useNavigate} from "react-router-dom"


const Formt = ({ initialTheme, handleSubmit, buttonLabel}) => {

    const navigate = useNavigate()
  
    const [formData, setFormData] = useState(initialTheme);
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  

    const handleSubmisson = (event) => {
      event.preventDefault();
      handleSubmit(formData);
      navigate("/");
    };
  

    return (
      <form onSubmit={handleSubmisson}>
          <input
          type="text"
          onChange={handleChange}
          value={formData.image}
          name="image"
          placeholder="Image"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.pagelayout}
          name="pagelayout"
          placeholder="Page Layout"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.creator}
          name="creator"
          placeholder="Creator"
        />
        
        <input type="submit" value={buttonLabel} />
      </form>
    );
  };
  
  export default Formt;
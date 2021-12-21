import {useState} from "react"
import {useNavigate} from "react-router-dom"


const Forms = ({ initialSupply, handleSubmit, buttonLabel}) => {

    const navigate = useNavigate()
  
    const [formData, setFormData] = useState(initialSupply);
  
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
          value={formData.brand}
          name="brand"
          placeholder="Supply Brand"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.type}
          name="type"
          placeholder="Type"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.ink}
          name="ink"
          placeholder="Ink"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.image}
          name="image"
          placeholder="Image"
        />
        <input type="submit" value={buttonLabel} />
      </form>
    );
  };
  
  export default Forms;
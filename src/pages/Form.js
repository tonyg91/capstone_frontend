import {useState} from "react"
import {useNavigate} from "react-router-dom"


const Formj = ({ initialJournal, handleSubmit, buttonLabel}) => {

    const navigate = useNavigate()
  
    const [formData, setFormData] = useState(initialJournal);
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  

    const handleSubmisson = (event) => {
      event.preventDefault();
      handleSubmit(formData);
      navigate("/journal");
    };
  

    return (
      <form onSubmit={handleSubmisson}>
        <input
          type="text"
          onChange={handleChange}
          value={formData.brand}
          name="brand"
          placeholder="Journal Brand"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.paperweight}
          name="paperweight"
          placeholder="Paper Weight"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.sizes}
          name="sizes"
          placeholder="Sizes"
        />
        <input
          type="number"
          onChange={handleChange}
          value={formData.pages}
          name="pages"
          placeholder="Page Count"
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
  
  export default Formj;
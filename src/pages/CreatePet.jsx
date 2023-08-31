import { useState } from "react";
import axios from "../util/axios";
import { useNavigate, Link} from "react-router-dom";


const CreatePet = () => {

  const [newPet, setNewPet] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target

    setNewPet(
      {
        ...newPet,
        [name]: value
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("", { ...newPet });

      setMessage(data?.msg);

    } catch (error) {
      console.log(error);
    };

    setTimeout(() => {
      navigate("/allpets")
    }, 1200);

  };

  return (
    <>

      <Link to="/allpets">
        <button> Cancel </button>
      </Link>
      <form onSubmit={handleSubmit} method="post">

        <label htmlFor="">Name Pet</label>
        <input
          type="text"
          name="name"
          value={newPet?.name}
          id=""
          onChange={handleChange} />

        <label htmlFor="">Age Pet</label>
        <input type="number"
          name="age"
          value={newPet?.age}
          id=""
          onChange={handleChange} />

        <label htmlFor="">Breed Pet</label>
        <input type="text"
          name="breed"
          value={newPet?.breed}
          id=""
          onChange={handleChange} />

        <label htmlFor="">Type Pet</label>
        <input type="text"
          name="type"
          value={newPet?.type}
          id=""
          onChange={handleChange} />

        <button>
          Save Pet
        </button>

      </form>
      <p>{message}</p>
    </>
  )
};


export default CreatePet;
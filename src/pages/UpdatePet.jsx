import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../util/axios";

const UpdatePet = ({ petEdit }) => {

  const [pet, setPet] = useState(petEdit);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPet({
      ...pet,
      [name]: value
    })
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/${pet?._id}`, pet);

      setMessage(data.msg);

      setTimeout(() => {
        navigate(`/${pet?._id}/detailpet`)
      }, 1200);
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <>
      <h1>Pet {pet?._id}</h1>

      <label htmlFor=""> Name Pet </label>
      <input
        type="text"
        name="name"
        defaultValue={pet?.name}
        onChange={handleChange} />

      <label htmlFor=""> Age Pet </label>
      <input
        type="number"
        name="age"
        defaultValue={pet?.age}
        onChange={handleChange} />

      <label htmlFor=""> Breed Pet </label>
      <input
        type="text"
        name="breed"
        defaultValue={pet?.breed}
        onChange={handleChange} />

      <label htmlFor=""> Type Pet </label>
      <input
        type="text"
        name="type"
        defaultValue={pet?.type}
        onChange={handleChange} />
      <hr />
      <button onClick={handleUpdate}>
        Update
      </button>
      {" "}

      <Link to={`/${pet?._id}/detailpet`}>
        <button> Cancel </button>
      </Link>


      <p>{message}</p>
    </>
  )
};

export default UpdatePet;
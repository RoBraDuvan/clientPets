import { useEffect, useState } from "react";
import axios from "../util/axios.js";
import { Link } from "react-router-dom";

const AllPets = () => {

  const [ pets, setPets ] = useState([]);

  const getPets = async () => {
    const { data } = await axios.get();
    setPets(data?.allPets);
  };

  useEffect(() => { getPets() }, [])

  return(
    <>
      <h1>All Pets</h1> 
      <Link to="/createpet" >
        <button> Create Pet</button>
      </Link>
      <hr />

      {pets.map((pet, i) => (
        <section key={pet?._id}>
          <h2> { `Pet ${i + 1}` } </h2>
          <p id={`${pet?._id}-${pet?.name}`}> {pet?.name} </p>
          <p id={`${pet?._id}-${pet?.age}`}> {pet?.age} </p>
          <p id={`${pet?._id}-${pet?.breed}`}> {pet?.breed} </p>
          <p id={`${pet?._id}-${pet?.type}`}> {pet?.type} </p>
          <Link to={`/${pet?._id}/detailpet`}>
            <button> Details </button>
          </Link>   
          <hr />
        </section>
      ))}   
    </>
  )
};


export default AllPets;
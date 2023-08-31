import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "../util/axios";

const DetailPet = ({ setPetEdit }) => {

  const [pet, setPet] = useState({});
  const [message, setMessage] = useState("");

  const { _id } = useParams();
  const navigate = useNavigate();

  const getPet = async () => {
    const { data } = await axios.get(`/${_id}`);
    setPet(data?.pet);
    setPetEdit(data?.pet);
  };

  const handleDelete = async () => {
    const { data } = await axios.delete(`/${_id}`);

    setMessage(data?.msg);

    setTimeout(() => {
      navigate("/allpets");
    }, 1200);
  }

  useEffect(() => { getPet() }, [])

  return (
    <>
      <Link to="/allpets">
        <button> Cancel </button>
      </Link>
      <h1> {pet?._id} </h1>

      <p> {pet?.name} </p>
      <p> {pet?.age} </p>
      <p> {pet?.breed} </p>
      <p> {pet?.type} </p>

      <p> {pet?.createdAt} </p>
      <p> {pet?.updatedAt} </p>

      <hr />

      <button onClick={handleDelete}> Delete </button>
      {" "}

      <Link to={`/${pet?._id}/edit`}>
        <button> Edit </button>
      </Link>

      <p>{message}</p>
    </>
  )
}

export default DetailPet;
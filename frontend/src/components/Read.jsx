import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../services/api";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/${id}`).then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="container vw-100 vh-100">
      <div className="d-flex justify-content-end my-3">
        <Link to="/" className="btn btn-primary">
          Voltar
        </Link>
      </div>
      <ul className="list-group my-3">
        <li className="list-group-item d-flex flex-column">
          <b>ID</b>
          <span>{data["id"]}</span>
        </li>
        <li className="list-group-item d-flex flex-column">
          <b>Name </b>
          <span>{data["name"]}</span>
        </li>
        <li className="list-group-item d-flex flex-column">
          <b>E-mail </b>
          <span>{data["email"]}</span>
        </li>
        <li className="list-group-item d-flex flex-column">
          <b>Data de Nascimento </b>
          <span>{data["birthdate"]}</span>
        </li>
        <li className="list-group-item d-flex flex-column">
          <b>CPF </b>
          <span>{data["cpf"]}</span>
        </li>
        <li className="list-group-item d-flex flex-column">
          <b>Telefone </b>
          <span>{data["phone"]}</span>
        </li>
        <li className="list-group-item d-flex flex-column">
          <b>Endereço </b>
          <span>{data["address"]}</span>
        </li>
        <li className="list-group-item">
          <b>Observação </b>
          <span>{data["note"]}</span>
        </li>
      </ul>
    </div>
  );
}

export default Read;

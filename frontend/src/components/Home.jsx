import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";

function Home() {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (deleted) {
      setDeleted(false);
      api.get("").then((res) => {
          setData(res.data);  
          filterData(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [deleted]);

  useEffect(() => {
    filterData(data);
  }, [searchTerm, data]);

  const filterData = (clients) => {
    const filteredClients = clients.filter((client) => {
      const nameMatch = client.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const emailMatch = client.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return nameMatch || emailMatch;
    });
    setFilteredData(filteredClients);
  }

  const handleDelete = (id) => {
    api.delete(`/${id}`).then(() => {
        setDeleted(true);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container-fluid vh-100 vw-100 bg-light">
      <h3>CRUD Cliente</h3>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary" to="/create">
          Adicionar Cliente
        </Link>
      </div>
      <div className="my-3 d-flex justify-content-center">
        <input
          className="w-25 px-2 text-center"
          type="text"
          placeholder="Pesquisar por nome ou e-mail"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      {filteredData.length === 0 ? (
        <div className="my-3 d-flex justify-content-center">
          <p className="fs-4 mt-5">Nenhum cliente cadastrado</p>
        </div>
      ) : (
        <table className="my-5">
          <thead>
            <tr>
              <th className="ps-5">ID</th>
              <th className="ps-5">Nome</th>
              <th className="ps-5">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((client) => (
              <tr key={client.id}>
                <td className="ps-5">{client.id}</td>
                <td className="ps-5">{client.name}</td>
                <td className="ps-5">{client.email}</td>
                <td className="ps-5">
                  <Link
                    className="btn mx-2 btn-success"
                    to={`/read/${client.id}`}
                  >
                    Detalhar
                  </Link>
                  <Link
                    className="btn mx-2 btn-warning"
                    to={`/edit/${client.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="btn mx-2 btn-danger"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );  
}

export default Home;

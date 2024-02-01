import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";

function Edit() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();
  const { id } = useParams();

  useEffect(() => {
    api.get(`/${id}`).then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    api.put(`/${id}`, data).then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          setErrors(error.response.data.message);
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      });
  }

  return (
    <div className="container vh-100 vw-100">
      <div className="row">
        <h3>Editar Cliente</h3>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-primary">
            Voltar
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Nome</label>
            <input
              value={data.name}
              className="form-control"
              id="name"
              placeholder="Digite o nome"
              minLength="1"
              pattern="[a-zA-ZÀ-ú ]*"
              title="Somente letras"
              type="text"
              name="name"
              required
              onChange={(event) => setData({ ...data, name: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">Email</label>
            <input
              value={data.email}
              className="form-control"
              id="email"
              placeholder="Digite o e-mail"
              minLength="1"
              type="email"
              name="email"
              required
              onChange={(event) => setData({ ...data, email: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="birthdate">Data de Nascimento</label>
            <input
              value={data.birthdate}
              className="form-control"
              id="birthdate"
              placeholder="Digite a data de aniversário no formato DD/MM/AAAA"
              pattern="\d{2}/\d{2}/\d{4}"
              minLength="1"
              type="text"
              name="birthdate"
              required
              onChange={(event) => setData({ ...data, birthdate: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="cpf">CPF</label>
            <input
              value={data.cpf}
              className="form-control"
              id="cpf"
              placeholder="Digite o CPF (somente números)"
              minLength="11"
              maxLength="11"
              pattern="\d{11}"
              title={errors}
              required
              onChange={(event) => setData({ ...data, cpf: event.target.value })}
            />
            {errors && <span className="text-danger">{errors}</span>}
          </div>
          <div className="form-group my-3">
            <label htmlFor="phone">Telefone</label>
            <input
              value={data.phone}
              className="form-control"
              id="phone"
              placeholder="Digite o telefone no formato (XX) XXXXX-XXXX"
              minLength="1"
              pattern="\(\d{2}\) \d{5}-\d{4}"
              type="text"
              name="phone"
              required
              onChange={(event) => setData({ ...data, phone: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="address">Endereço</label>
            <input
              value={data.address}
              className="form-control"
              id="address"
              placeholder="Digite o endereço"
              minLength="1"
              type="text"
              name="address"
              required
              onChange={(event) => setData({ ...data, address: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="note">Observação</label>
            <textarea
              value={data.note}
              className="form-control"
              id="note"
              placeholder="Digite uma observação (opcional)"
              minLength="1"
              name="note"
              onChange={(event) => setData({ ...data, note: event.target.value })}
            />
          </div>
          <div className="form-group my-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-success">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;

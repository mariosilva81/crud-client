import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    birthdate: "",
    cpf: "",
    phone: "",
    address: "",
    note: "",
  });

  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    api.post("", values)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          setErrors(error.response.data.message);
        } else {
          console.log(error);
        }
      });
  }

  return (
    <div className="container vh-100 vw-100">
      <div className="row">
        <h3>Adicionar Cliente</h3>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-primary">
            Voltar
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Nome</label>
            <input
              className="form-control"
              id="name"
              placeholder="Digite o nome"
              minLength="1"
              pattern="[a-zA-ZÀ-ú ]*"
              title="Somente letras"
              type="text"
              name="name"
              required
              onChange={(event) => setValues({ ...values, name: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">E-mail</label>
            <input
              className="form-control"
              id="email"
              placeholder="Digite o e-mail"
              minLength="1"
              type="email"
              name="email"
              required
              onChange={(event) => setValues({ ...values, email: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="birthdate">Data de Nascimento</label>
            <input
              className="form-control"
              id="birthdate"
              placeholder="Digite a data de aniversário no formato DD/MM/AAAA"
              pattern="\d{2}/\d{2}/\d{4}"
              minLength="1"
              type="text"
              name="birthdate"
              required
              onChange={(event) => setValues({ ...values, birthdate: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="cpf">CPF</label>
            <input
              className="form-control"
              id="cpf"
              placeholder="Digite o CPF (somente números)"
              minLength="11"
              maxLength="11"
              pattern="\d{11}"
              title={errors}
              required
              onChange={(event) => setValues({ ...values, cpf: event.target.value })}
            />
            {errors && <span className="text-danger">{errors}</span>}
          </div>
          <div className="form-group my-3">
            <label htmlFor="phone">Telefone</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Digite o telefone no formato (XX) XXXXX-XXXX"
              minLength="1"
              pattern="\(\d{2}\) \d{5}-\d{4}"
              type="text"
              name="phone"
              required
              onChange={(event) => setValues({ ...values, phone: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="address">Endereço</label>
            <input
              className="form-control"
              id="address"
              placeholder="Digite o endereço"
              minLength="1"
              type="text"
              name="address"
              required
              onChange={(event) => setValues({ ...values, address: event.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="note">Observação</label>
            <textarea
              className="form-control"
              id="note"
              placeholder="Digite uma observação (opcional)"
              maxLength="300"
              minLength="1"
              name="note"
              onChange={(event) => setValues({ ...values, note: event.target.value })}
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

export default Create;

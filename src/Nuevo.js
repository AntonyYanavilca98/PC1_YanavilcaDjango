import React , { Component } from 'react'
import axios from 'axios'

class Nuevo extends React.Component {

    state = {
    nombre: '',
    precio: '0',
    idcat: '0',
    stock: '0'
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('nombre', this.state.nombre);
    form_data.append('precio', this.state.precio);
    form_data.append('idcat', this.state.idcat);
    form_data.append('stock', this.state.stock);
    let url = 'http://localhost:8000/api/posts/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
          alert("Se ha registrado de manera exitosa")
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
      <br/>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" className="form-control" placeholder='Nombre del producto' id='nombre' value={this.state.nombre} onChange={this.handleChange} required/>
          </p>
          <br/>
          <p>
            <input type="number" className="form-control" placeholder='Precio' id='precio' value={this.state.precio} onChange={this.handleChange} required/>

          </p>
          <br/>
          <p>
            <input type="number" className="form-control" placeholder='Id categoria' id='idcat' value={this.state.idcat} onChange={this.handleChange} required/>

          </p>
          <br/>
          <p>
            <input type="number" className="form-control" placeholder='Stock' id='stock' value={this.state.stock} onChange={this.handleChange} required/>

          </p>
          <br/>
          <input type="submit" className="btn btn-dark" value="Registrar"/>
        </form>
      </div>
    );
  }
}


export default Nuevo;

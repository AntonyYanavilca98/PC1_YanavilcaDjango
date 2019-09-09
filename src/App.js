import React, { Component } from 'react'
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            productos: [],
            nombre: '',
            precio: '0',
            idcat: '0',
            stock: '0'
        })

        this.cambioNombre = this.cambioNombre.bind(this);
        this.cambioPrecio = this.cambioPrecio.bind(this);
        this.cambioCat = this.cambioCat.bind(this);
        this.cambioStock = this.cambioStock.bind(this);
        this.mostrar = this.mostrar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }

    componentWillMount() {
        axios.get('http://localhost:8000/api/posts')
            .then(res => {
                this.setState({ productos: res.data })
            });
    }

    cambioNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambioPrecio(e) {
        this.setState({
            precio: e.target.value
        })
    }

    cambioCat(e) {
        this.setState({
            idcat: e.target.value
        })
    }

    cambioStock(e) {
        this.setState({
            stock: e.target.value
        })
    }

    mostrar(cod, index) {
        axios.get('http://localhost:8000/api/posts/' + cod + '/')
            .then(res => {
                this.setState({
                    pos: index,
                    titulo: 'Editar',
                    id: res.data.id,
                    nombre: res.data.nombre,
                    precio: res.data.precio,
                    idcat: res.data.idcat,
                    stock: res.data.stock
                })
            });
    }

    eliminar(cod) {
        let rpta = window.confirm("Desea eliminar?");
        if (rpta) {
            axios.delete('http://localhost:8000/api/posts/' + cod + '/')
                .then(res => {
                    var temp = this.state.productos.filter((producto) => producto.id !== cod);
                    this.setState({
                        productos: temp
                    })
                });
        }
    }

    render(){
      return(
      <div className="container">
      <center>
      <h1>Lista de productos</h1>
      </center>
      <form>
      <table className="table">
      <thead className="thead-dark">
        <tr>
           <th>ID</th>
           <th>Nombre</th>
           <th>Precio</th>
           <th>Idcat</th>
           <th>Stock</th>
           <th>Editar</th>
           <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {this.state.productos.map( (producto,index) => {
          return (
            <tr key={producto.id}>
               <td>{producto.id}</td>
               <td>{producto.nombre}</td>
               <td>{producto.precio}</td>
               <td>{producto.idcat}</td>
               <td>{producto.stock}</td>
               <td> 
                  <a href = { "http://localhost:3000/usuarios/" + producto.id } className = "btn btn-primary">Editar</a>
               </td>
               <td> 
                  <button onClick={()=>this.eliminar(producto.id)} className = "btn btn-primary">Eliminar</button>
               </td>
            </tr>
            );
        })}
      </tbody>
      </table>
      </form>
      </div>
      );
    }
  }
  
  export default App;
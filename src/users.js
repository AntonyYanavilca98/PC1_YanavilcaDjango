import React ,{ Component } from 'react'
import axios from 'axios';

class Users extends React.Component {
	constructor(props) {
    super(props);
    this.state = ({
      productos: [],
      id: 0,
      nombre: '',
      precio: '0',
      idcat: '0',
      stock: '0'
    })

    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioPrecio = this.cambioPrecio.bind(this);
    this.cambioCat = this.cambioCat.bind(this);
    this.cambioStock = this.cambioStock.bind(this);
    this.mostrar= this.mostrar.bind(this);
  }

  componentWillMount(){
    const id= this.props.match.params.id;
    axios.get('http://localhost:8000/api/posts/'+id+'/')
    .then(res => {
      this.setState({ productos: res.data})
      console.log(this.state.productos)
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


  mostrar(cod,index){
    axios.get('http://localhost:8000/api/posts/'+cod+'/')
    .then(res => {
      this.setState( {
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

	render() {
		const { params } = this.props.match
    return (
    	<div>
    	<form onSubmit={this.onSubmit}>
        <div className="row">
        <input type="hidden" value={this.state.id} />
        <div className="col">
        <label>Codigo</label>
        <input type="number" readOnly="readonly" className="form-control" value={params.id}  />
        </div>
				<br/>
        <div className="col">
        <label>Nombre</label>
        <input type="text" className="form-control" value={this.state.productos.nombre} onChange={this.cambioNombre} />
        </div>
				<br/>
        <div className="col">
        <label>Precio</label>
        <input type="number" className="form-control" value={this.state.productos.precio} onChange={this.cambioPrecio} />
        </div>
        <br/>
        <div className="col">
        <label>Id categoria</label>
        <input type="number" className="form-control" value={this.state.productos.idcat} onChange={this.cambioCat} />
        </div>
        <br/>
        <div className="col">
        <label>Stock</label>
        <input type="number" className="form-control" value={this.state.productos.stock} onChange={this.cambioStock} />
        </div>
        <br/>
        <div className="col">
        <input type="submit" className="form-control" value="Actualizar"/>
        </div>
        <br/>
        </div>
        </form>
        </div>
    );
  }
}

export default Users;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="https://brunomejia.pythonanywhere.com/api/restaurants/";

class App extends Component {

  state={
    data:[],
  }

  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
  return (
    <div className="App">
        <button className="btn btn-success">Agregar restaurante</button>
        <table className="table ">
          <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>País</th>
            <th>Capital Bursatil (en millones de USD)</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
            {this.state.data.map(restaurant=>{
                return(
                  <tr>
                    <td>{restaurant.id}</td>
                    <td>{restaurant.restaurant_name}</td>
                    <td>{restaurant.restaurant_type}</td>
                    <td>{restaurant.address}</td>
                    <td></td>
                  </tr>
                )
            })}

          </tbody>
        </table>
    </div>
  );
}
}

export default App;

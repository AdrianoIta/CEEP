import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  constructor() {
    super()
    this.notas = []
    this.state = {
      notas:[]
    }
  }
  deletarNota(index) {
    debugger;
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas})
  }
  criarNota(titulo, texto) {
    const novaNota = {
      titulo, 
      texto
    }
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="conteudo">  
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
          notas={this.state.notas}
          apagarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeCategorias from "./components/ListadeCategorias";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      notas:[],
      categorias:[]
    }
  }
  adicionarCategoria(nomeCategoria,){
    debugger;
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado)
  }
  deletarNota(index) {
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
          <FormularioCadastro 
            categorias={this.state.categorias}
            criarNota={this.criarNota.bind(this)}/>
        <main className="categoria-principal">
          <ListadeCategorias 
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}/>
          <ListaDeNotas 
              notas={this.state.notas}
              apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
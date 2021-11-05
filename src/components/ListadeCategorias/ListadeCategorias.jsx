import React, { Component } from 'react'
import './Estilo.css'
import Categorias from '../../dados/Categorias'
class ListadeCategorias extends Component {
  constructor() {
    super()
    this.state = { categorias: [] }
    this._novasCategorias = this._novasCategorias.bind(this)
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias)
  }
  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }
  _handlerEventoInput(evento) {
    if (evento.key === 'Enter') {
      let valorCategoria = evento.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            )
          })}
        </ul>
        <input
          type="text"
          placeHolder="Adicionar Categoria"
          className="lista-categorias_input"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    )
  }
}

export default ListadeCategorias

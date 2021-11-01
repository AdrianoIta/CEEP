import React, { Component } from 'react'
import './Estilo.css'
class ListadeCategorias extends Component {
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
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            )
          })}
        </ul>
        <input type="text" placeHolder="Adicionar Categoria"className="lista-categorias_input" onKeyUp={this._handlerEventoInput.bind(this)} />
      </section>
    )
  }
}

export default ListadeCategorias

import React, { Component } from 'react'
import './Estilo.css'
class FormularioCadastro extends Component {
  constructor(props) {
    super(props)
    this.titulo = ''
    this.texto = ''
  }
  _handleMudancaTitulo(evento) {
    this.titulo = evento.target.value
  }
  _handleMudancaTexto(evento) {
    this.texto = evento.target.value
  }
  _criarNota(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <label>Categorias:</label>
        <select className="form-cadastro-input">
          {this.props.categorias.map(categoria => {
            return <option>{categoria}</option>
          })}
        </select>
        <label>Título:</label>
        <input
          type="text"
          className="form-cadastro-input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <label>Descrição:</label>
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro-input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <br />
        <button className="form-cadastro-input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    )
  }
}

export default FormularioCadastro

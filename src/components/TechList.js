import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = { 
    newTech: '',
    techs: []
  };

  // executado assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({ techs: JSON.parse(techs)});
    }
  }

  // executado sempre que houver alteracao nas props ou estado
  componentDidUpdate(_, prevState){
    if(prevState.techs != this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // executado quando deixa de existir
  componentWillUnmount(){
    
  }

  //arrow function para acessat o .this
  handleInputChange = e => {
    //console.log(e.target.value);
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    //prevenir de resetar tela
    e.preventDefault();

    //... copia os states atuais
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
     });
    console.log(this.state.newTech);

    //salvar no browser
  }

  handleDelete = (tech) => {
    //console.log(tech);
    //filtrar todas as tecnologias que sejam diferentes do parametro
    this.setState({ techs: this.state.techs.filter(t => t != tech)})
  }

  //precisa ter
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
          <ul>
            {this.state.techs.map(tech => (
             <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}>
             </TechItem>
            ))}
          </ul>
          <input 
            type="text" 
            onChange={this.handleInputChange} 
            value={this.state.newTech}></input>
          <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;

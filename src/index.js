import React from 'react' 
import ReactDOM from 'react-dom' 
import PrimeiroComponente from './componentes/PrimeiroComponente'
import MultComponent, {CompA, CompB as B, CompC, CompD} from './componentes/MultComponent'
import FamiliaRosa from "./componentes/FamiliaRosa"
const elementDivRoot =  document.getElementById('root')
ReactDOM.render(
    [
        <PrimeiroComponente />, 
        <MultComponent value="Teste Component Default"></MultComponent>,
        <CompA value="Componente A Lançado, com Valor do primeiro atributo"  value2="Componente A com Valor do segundo atributo A"></CompA>,
        <B value="Componente B presente"></B>,
        <CompC value={2**10} numero="2" potencia="10"></CompC>,
        <CompD value="Componernte D sendo envolvido por React.Fragment"></CompD>,
        <FamiliaRosa />
], elementDivRoot)


// const lista =  <ul><li>Giorgy</li><li>Veridiana</li></ul>
// const elementDivRoot =  document.getElementById('root')
// ReactDOM.render(lista,elementDivRoot)


// const elementDivRoot =  document.getElementById('root')
// ReactDOM.render(
//     <h1>Olá React 2</h1>,
//     elementDivRoot
// )


// const lista = document.createElement('ul')
// let item = document.createElement('li')
// let texto = document.createTextNode('1 ) Pedro')
// item.appendChild(texto)
// lista.appendChild(item)
// item = document.createElement('li')
// texto = document.createTextNode('2 ) Ana')
// item.appendChild(texto)
// lista.appendChild(item)
// const elementDivRoot =  document.getElementById('root')
// elementDivRoot.appendChild(lista)
//ReactDOM.render(lista,elementDivRoot)
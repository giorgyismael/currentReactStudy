import React from 'react'

const CompA = props =>
    [
    <h1>{props.value}</h1>,
    <h2>{props.value2}</h2>
    ]
    const CompB = function(props){
        return <h2>{props.value}</h2>
    }
    
    const CompC = (props) =>
    <h2>Caluclu de {props.numero} ** {props.potencia} = {props.value}</h2>
    
    const CompD = props =>
        <React.Fragment>
        <h1>{props.value}</h1>
        <h2>{props.value2}</h2>
        </React.Fragment>

const  Default = props => <h1>{props.value}</h1>

export default Default
export {CompA, CompB, CompC, CompD}
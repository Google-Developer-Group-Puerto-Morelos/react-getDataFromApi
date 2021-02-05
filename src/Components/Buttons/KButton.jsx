import React from 'react'

const KButton = (props) => {

    const btnClick= ()=>{
        alert(props.text ? `Enviaste "${props.text}" como prop de este boton! :)`:"No enviaste ningún prop al componente")
    }

    return (
        <button className="ant-btn" onClick={()=> btnClick()}>{props.text ? props.text : "Sin texto"}</button>
    )
}

export default KButton

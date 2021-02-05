import React from 'react'

const KButton = (props) => {

    const btnClick= ()=>{
        alert(`Enviaste "${props.text}" como prop de este boton! :)`)
    }

    return (
        <button className="ant-btn" onClick={()=> btnClick()}>{props.text}</button>
    )
}

export default KButton

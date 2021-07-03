import React from 'react'
import './Main.css'
import Pin from './Pin'

const Main = (props) => {
    let {pins}=props;

    return (
        <div className="main">
            <div className="main__container">
                {pins.map((pin,index)=>{
                    let {urls}=pin;
                    return <Pin key={index} urls={urls}/>
                })}
            </div>
        </div>
    )
}

export default Main

import React from 'react';
import App from "../../App";

function InputCard({applyHandler}) {
    const apply = () => {
        applyHandler();
    };


    return (
        <div  className="card" style={{width : '18rem',float: 'left',height: '15rem'}}>
            <div className="card-body">
                <h5 className="card-title">
                    <input id="name" type="text" placeholder="YOUR NAME"></input>
                </h5>
                <h5 className="card-title">
                    <input id="username" type="text" placeholder="YOUR USERNAME"></input>
                </h5>
                <h5 className="card-title">
                    <input id="phone" type="text" placeholder="YOUR PHONE"></input>
                </h5>
                <a href="#" onClick={apply} className="btn btn-primary">APPLY</a>
            </div>
        </div>
    );
}

export default InputCard;
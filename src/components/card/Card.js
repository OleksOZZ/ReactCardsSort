import React from 'react';

function Card({user, hideHandler, basketHandler}) {

    const hide = () => {

        //this.props.
        hideHandler(user.id);
        console.log(`now card ${user.id} is hidden`);
    };

    const add = () => {
        console.log(`user: ${user.id} has been added to the basket`);
        basketHandler(user.id);
    };

    return (
        !user.ishidden === true &&
            <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '15rem'}}>
                <div className="card-body">
                    <h3 className="card-title">{user.name}</h3>
                    <h4 className="card-title">{user.username}</h4>
                    <h5 className="card-title">{user.phone}</h5>
                    <a href="#" onClick={hide} className="btn btn-primary">HIDE CARD</a>
                    <a href="#" onClick={add} className="btn btn-primary">Add to chart</a>
                </div>
            </div>
    );
}

export default Card;
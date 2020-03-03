import React from "react";

function Header({nameSort, citySort, counter, hidedHandler, openBasketHandler, ground0}) {
    const sortByName = () => {
        console.log(`Sorted by NAME`);
        nameSort();
    };
    const sortByCity = () => {
        console.log(`Sorted by City`);
        citySort()
    };
    const revealHided = () =>{
        console.log(`hided had been revealed`);
        hidedHandler();
    };
    const showAdded =()=> {
        console.log(`displays users in basket`);
        openBasketHandler();
    };
    const toBasicValues =()=>{
        ground0();
    };
    return(
    <nav className="navbar navbar-dark bg-primary">
        <h1>USERS REACT</h1>
        <a href="#" onClick={sortByName} className="btn btn-primary">by Author Name</a>
        <a href="#" onClick={sortByCity} className="btn btn-primary">by City</a>
        <a href="#" onClick={revealHided} className="btn btn-primary">Show removed users</a>
        <a href="#" onClick={showAdded} className="btn btn-primary">Users Added: {counter} </a>
        <a href="#" onClick={toBasicValues} className="btn btn-primary">HOME</a>
    </nav>
    );
}

export default Header;
import React from "react";

function Header({nameSort, citySort}) {
    const sortByName = () => {
        console.log(`Sorted by NAME`);
        nameSort();
    };
    const sortByCity = () => {
        console.log(`Sorted by City`);
        citySort()
    };
    return(
    <nav className="navbar navbar-dark bg-primary">
        <h1>Header</h1>
        <a href="#" onClick={sortByName} className="btn btn-primary">by Author Name</a>
        <a href="#" onClick={sortByCity} className="btn btn-primary">by City</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </nav>
    );
}

export default Header;
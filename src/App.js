import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";

class App extends React.Component {

    state={
        data: null,
        date: new Date()
    };

    componentDidMount() {
        setTimeout( () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(result => {
                this.setState({data:result});
                console.log(result);
            })}, 30);
    }

    sortNameHandler = () =>{
        const sortedByName = this.state.data.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        this.setState({data:sortedByName});
    };

    sortCityHandler = () => {
        const sortedByCity = this.state.data.sort(function(a, b) {
            if (a.address.city > b.name) {
                return 1;
            }
            if (b.address.city < b.name) {
                return -1;
            }
            return 0;
        });
        this.setState({data:sortedByCity});
    };

    render() {
        const {data} = this.state;
        return (
            <div className="App">
                <Header nameSort={this.sortNameHandler} citySort={this.sortCityHandler}/>
                {data ?
                    data.map(i => {
                        return <Card user={i} key={i.id}/>
                    })
                    : "Loading"
                }
            </div>
        )
    }
}

export default App;

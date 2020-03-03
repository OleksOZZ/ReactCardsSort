import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import InputCard from "./components/card/InputCard";

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            data: null,
            base: null,
            date: new Date(),
            basket: 0,
            hiddenId: null,
            selectedUsers: null
        };
    }

    componentDidMount() {
        setTimeout( () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(result => {
                this.setState({data:result});
                this.setState({base:result});
                console.log(result);
            })}, 444);
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

    hideHandler = (value) => {
        console.log(value);
        this.setState({ hiddenId: value });
        //console.log(this.state.data);
        const users = this.state.data;
        //console.log(users[value - 1]);
        users[value-1].ishidden=true;
        //console.log(users);
         this.setState({data: users});
         console.table(this.state.data);
    };

    hidedHandler = () => {
        console.log(`moved to parent success`);
        const users = this.state.data;
        users.map(user => user.ishidden = false);
        this.setState({data: users});
    };

    basketHandler =(value) =>{
        console.log(`moved to parent success`);
        const users = this.state.data;
        users[value-1].inBasket=true;
        console.table(users);
        const usersInBasket = users.filter(users => users.inBasket===true);
        console.log(usersInBasket);

        this.setState({selectedUsers: usersInBasket});
        // console.log(this.state.selectedUsers);
        const counter = usersInBasket.length;
        this.setState({count: counter});
        console.log(this.state.count);
    };

    openBasketHandler = () => {
        const users = this.state.data;
        const usersInBasket = users.filter(users => users.inBasket===true);
        this.setState({data: usersInBasket});
    };

    ground0 = () => {
        this.setState({data: this.state.base});
    };

    applyHandler = () => {
        let name = document.getElementById("name").value;
        let username = document.getElementById("username").value;
        let phone = document.getElementById("phone").value;

        const users = this.state.data;
        let user = {
            id: users.length + 2,
            name: name,
            username: username,
            phone: phone
        };
        users.push(user);
        this.setState({data: users});
    };

    render() {

        const {data} = this.state;

        return (
            <div className="App">
                <Header counter={this.state.count} nameSort={this.sortNameHandler} citySort={this.sortCityHandler} hidedHandler={this.hidedHandler} openBasketHandler={this.openBasketHandler} ground0={this.ground0}/>
                 {data ?
                    data.map(i => {
                        return <Card hideHandler={this.hideHandler} basketHandler={this.basketHandler} user={i} key={i.id}/>
                    })
                    : <h1>"Loading"</h1>
                }
                <InputCard applyHandler={this.applyHandler}/>
            </div>
        )
    }
}

export default App;

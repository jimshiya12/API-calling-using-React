import React, {Component} from 'react';



class DataDisplay extends Component{
    constructor(props){
        super(props);
        this.state ={
            items: []
        }
    }
    componentDidMount(){
        fetch('https://Jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>{
            this.setState({
                items:data
            })
        })
    }

    render(){
        const {items} = this.state;
        return(
            
            <div>
            <header className= "display-4">Show Data</header>
            {
             items.map(item =>(
                <ul className = "list-group mb-4" key = {item.id}>
                    <li className = "list-group-item text-primary">{item.name}</li>
                    <li className = "list-group-item text-secondary">{item.email}</li>
                    <li className = "list-group-item text-info">{item.website}</li>
                </ul>
            ))
            }</div>
            
        )     
        
    }
}

export default DataDisplay;
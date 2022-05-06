import React from "react";
import './App.css';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


  
  

class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
    

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        var { DataisLoaded, items } = this.state;

        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User Name: { item.name }
                  
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default App;
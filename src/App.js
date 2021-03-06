import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './Images/image.png';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : {},
             country: '',
        }
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        // console.log(fetchedData);
        this.setState({
            data : fetchedData,
        })
        
    }
    handleCountryChange = async(country) =>{
        
        const fetchedData = await fetchData(country);
        this.setState({
            data : fetchedData,
            country : country,
        })
        console.log(fetchedData);
        //fetch data
        // set the stae
    }
    
    render() {
        const {data,country} =  this.state;
        
        return (
            <div className = {styles.container}>
                <img className = {styles.image} src = {coronaImage} alt ="Covid-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data= {data} country={country}/>
            </div>
        )
    }
}

export default App

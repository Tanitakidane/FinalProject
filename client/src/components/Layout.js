import React, { Component } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'

export default class Layout extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <>
           
             <Header/>
             { this.props.children } 

             <Footer/>

             </>


           
        )
    }
}

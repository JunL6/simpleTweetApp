import React, { Component } from 'react';

export default class TempInput extends Component {
    constructor(props) {
        super(props);
        // this.state = { temp: props.temp };
        
        this.onNewChange = this.onNewChange.bind(this);
        // console.log(this.state);
        
    }

    onNewChange(e) {
        this.props.onInputChange(e.target.value, this.props.type);
        
    }
    
 

    render() {
        return (
            <fieldset>
                <legend>Enter temperature in {this.props.type}</legend>
                <input 
                    value={this.props.temp}
                    onChange={this.onNewChange}
                />
                {console.log(this.props.temp)}
            </fieldset>
                
            
        );
    }
}
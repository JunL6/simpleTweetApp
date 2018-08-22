import React, { Component } from 'react';
import TempInput from './temp_input';
import BoilVerdit from './boil_verdit';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cel: '',
            feh: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    tempConvert(temp, initialType) {
        let convertedTemp = 0;
        switch(initialType) {
            case 'cel':
                convertedTemp = (temp * (9/5)) + 32;
                break;
            case 'feh':
                convertedTemp = (temp - 32) * (5/9);
                break;
        }
        return convertedTemp;
    }

    onInputChange(temp, type){
        // //check if temp is number
        const tempNum = parseFloat(temp);
        // if(Number.isNaN(tempNum)) {

        // }

        if(type === 'cel') {
            this.setState({
                cel: tempNum,
                feh: this.tempConvert(tempNum, 'cel') 
            });
        } else if(type === 'feh') {
            this.setState({
                cel: this.tempConvert(tempNum, 'feh'),
                feh: tempNum
            });
        }
    }

    render() {
        return (
            <div>
                <TempInput type='cel' temp={this.state.cel} onInputChange={this.onInputChange}/>
                <TempInput type='feh' temp={this.state.feh} onInputChange={this.onInputChange}/>
                <BoilVerdit cel={parseFloat(this.state.cel)} />
                {console.log(this.state)}
            </div>
        );
    }

}
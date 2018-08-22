import React, { Component } from 'react';
import { postTweet } from '../actions';
import { connect } from 'react-redux';

class TweetBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.props.postTweet(this.state.term);
        this.setState({ term: ''});
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                    type='text' 
                    // onChange={this.onInputChange}
                    onChange={event => this.setState({term: event.target.value})}
                    value={this.state.term} />
                    <span>
                        <button type='submit'>Tweet</button>
                    </span>
                </form>
            </div>
        );
    }
}

export default connect(null, { postTweet })(TweetBar);
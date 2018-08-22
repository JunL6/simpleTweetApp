import React, { Component } from 'react';
import { connect } from 'react-redux';

class TweetList extends Component {
    renderList() {
        return this.props.tweets.map((tweet) =>{
            return (
                <li key={tweet.id}>
                    {tweet.text}
                </li>)
        });
    }

    render() {
        console.log(this.props.tweets);

        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { tweets: state.tweets }
}

export default connect(mapStateToProps)(TweetList);
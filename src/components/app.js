import React, { Component } from 'react';

import TweetBar from './tweet_bar';
import TweetList from './tweet_list';
import Calculator from './docs/calculator';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <TweetBar />
                <TweetList /> */}
                <Calculator />
            </div>
        );
    }
}
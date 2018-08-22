import { POST_TWEET } from '../actions';

const initialTweets = [
    {id: 0, text: 'first tweet.'},
    {id: 1, text: 'second tweet'}
];

export default function(state=[], action) {
    switch(action.type) {
        case POST_TWEET:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}
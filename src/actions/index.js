export const POST_TWEET = 'post_tweet';

const INITIAL_TWEET_ID = 0;
let tweetId = INITIAL_TWEET_ID;

export function postTweet(text) {
    return {
        type: POST_TWEET,
        payload: { id: tweetId++, text }
    }
}
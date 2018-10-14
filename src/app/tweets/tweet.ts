
export interface TweeterData {
    replies: Tweet[];
    retweets: Tweet[];
    followers: number;
    tweets_count: number;
}

export interface Tweet {
    tweet: string;
    count: number;
}

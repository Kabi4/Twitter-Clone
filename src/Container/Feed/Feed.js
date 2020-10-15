import React, { Component } from 'react';
import Tweet from '../../Components/Tweet/Tweet';
import Tweetinput from '../../Components/TweetInput/Tweetinput';
import db from '../../Firebase/Firebase';
import './Feed.css';

class Feed extends Component {
    state = {
        tweets: []
    }

    componentDidMount(){
        db.collection("tweets")
        .orderBy("timeStamp","desc")
        .onSnapshot(snapShot=>{
            this.setState({tweets: snapShot.docs.map(ele=>{return{id: ele.id,data: ele.data()}})})
        })
    }
    render() {
        return (
            <div className="feed">
                <h2 className="feed__title">Home</h2>
                <Tweetinput/>
                {this.state.tweets.length>0 && this.state.tweets.map(ele=>{
                    return ele.data.timeStamp && <Tweet
                                key={ele.id} 
                                displayName={ele.data.displayName}
                                profileUrl={ele.data.profileUrl}
                                userName={ele.data.userName} 
                                verified={ele.data.verified}
                                timeStamp={ele.data.timeStamp}
                                tweetText={ele.data.tweetText}
                                imagesUrls={ele.data.images}
                            />
                })}
            </div>
        )
    }
};

export default Feed;

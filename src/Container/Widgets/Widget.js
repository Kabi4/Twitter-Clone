import React, { Component } from 'react';
import './Widget.css'

import SearchIcon from '@material-ui/icons/SearchRounded';

import {TwitterTweetEmbed,TwitterTimelineEmbed,TwitterShareButton} from 'react-twitter-embed';

class Widget extends Component {
    render() {
        return (
            <div className="widget">
                <div className="widget__search">
                    <input type="text" placeholder="Search twitter" />
                    <SearchIcon className="widget__search__icon" />
                </div>
                <div className="widget__container">
                    <h2>What's Happening?</h2>
                    <TwitterTweetEmbed tweetId={"1313445121325580289"}/>
                    <br/>
                    <TwitterShareButton url="https://twitter.com/elonmusk" options={{text: "#spaceWar", via:"elonmusk"}}/>
                    <br/>
                    <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{height: 400}} />
                </div>
            </div>
        )
    }
};

export default Widget;
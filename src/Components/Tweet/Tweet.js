import { Avatar } from '@material-ui/core';
import React from 'react';
import './Tweet.css';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

const Tweet = ({displayName,userName,profileUrl,verified,timeStamp,tweetText,imagesUrls}) => {
    return (
        <div className="tweet">
            <div className="tweet__info">
                <Avatar className="tweet__info__user"src={profileUrl} alt="Avatar" >{displayName[0]}</Avatar>
                <div className="tweet__info__content">
                    <div className="tweet__info__content__user">
                        <h3>{displayName}</h3>
                        {verified && <VerifiedUserIcon id="verified" />}
                        <p>@ {userName}</p>
                        <p>{new Date(timeStamp.toDate()).toUTCString()}</p>
                    </div>
                    <div className="tweet__info__content__tweet">
                        <p>
                            {tweetText}
                        </p>
                        {imagesUrls.length>0 && imagesUrls.map(url=>url!=="" && <img key={url} alt="tweet" src={url} />)}
                    </div>
                </div>
            </div>
            <div className="tweet__function">
                <ModeCommentIcon id="tweet__function__comment"/>
                <LoopIcon id="tweet__function__retweet"/>
                <FavoriteBorderIcon id="tweet__function__like"/>
                <ShareIcon id="tweet__function__share"/>
            </div>
        </div>
    )
};

export default Tweet;

import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Tweetinput.css';

import firebase from 'firebase';
import db from '../../Firebase/Firebase';
import { connect } from 'react-redux';

const Tweetinput = (props) => {
    const [tweetContent,settweetContent] = useState("");
    const [tweeting,setTweeting] = useState(false);

    const tweetTWEET = (e) =>{
        e.preventDefault();
        setTweeting(true);
        const data = {
            displayName: props.user.displayName,
            userName: props.user.userName,
            profileUrl: props.user.photoURL,
            verified: props.user.verified,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            tweetText: tweetContent,
            images: []
        }
        db.collection("tweets")
        .add(data)
        .then(res=>{
            settweetContent("");
            setTweeting(false);
        })
        .catch(err=>{
            alert("Something Fishy Happend Can't Post...Please try again...");
            setTweeting(false);
        });
    }
    console.log(props.user)
    return (
        <div className="selftweet">
            <div className="selftweet__body">
                <Avatar className="selftweet__body__avatar" src={props.user.photoURL} alt="avatar" >{props.user.displayName[0]}</Avatar>
                <textarea value={tweetContent} onChange={(e)=>{if(tweetContent.length<300){settweetContent(e.target.value)}}} placeholder="What's Happening......?"/>
            </div>
            <div className="selftweet__tweet">
                <p style={{color: tweetContent.length>250?"red":"grey"}}>{tweetContent.length}/300 Words</p>
                <Button disabled={tweeting} onClick={(e)=>{tweetTWEET(e);}} className="selftweet__button">Tweet</Button>
            </div>
        </div>
    )
};


const mapStateToProps = (state) =>{
    return{
      user: state.auth.user
    }
  }

export default connect(mapStateToProps)(Tweetinput);
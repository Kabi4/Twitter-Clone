import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';

import './Tweetinput.css';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import firebase from 'firebase';
import db,{storage} from '../../Firebase/Firebase';
import { connect } from 'react-redux';

const Tweetinput = (props) => {
    const [tweetContent,settweetContent] = useState("");
    const [uploadImages,setuploadImages] = useState(null);
    const [tweeting,setTweeting] = useState(false);
    const [uploadedAmount,setuploadedAmount] = useState(0);
    const [uploadedNumber,setuploadedNumber] = useState(0);

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
        const uploadedImages = [];
        // if(uploadImages && uploadImages.length>0){uploadImages.forEach((ele,index)=>{
        //     const uploadTask = storage.ref(`images/${ele.name}`).put(ele);
        //     uploadTask.on(
        //         "state_changed",
        //         (snapshot)=>{
        //             const progress = Math.round(
        //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //                 );
        //             setuploadedAmount(progress);
        //         },
        //         (error)=>{
        //             alert(error.message);
        //         },
        //         ()=>{
        //             storage.ref("images")
        //             .child(ele.name)
        //             .getDownloadURL()
        //             .then(url=>{
        //                 uploadedImages.push(url);
        //                 setuploadedNumber(uploadedImages.length);
        //                 if(uploadedImages.length===uploadImages.length){
        //                     db.collection("tweets")
        //                     .add({
        //                         ...data,
        //                         images: uploadedImages
        //                     })
        //                     .then(res=>{
        //                         settweetContent("");
        //                         setTweeting(false);
        //                         setuploadImages(null);
        //                         setuploadedAmount(0);
        //                     })
        //                     .catch(err=>{
        //                         alert("Something Fishy Happend Can't Post...Please try again...");
        //                         setTweeting(false);
        //                         setuploadedAmount(0);
        //                         setuploadedNumber(1);
        //                     });
        //                 }
        //             })
        //         }
        //     );
        // })}else{
        //     db.collection("tweets")
        //     .add({
        //         ...data,
        //         images: uploadedImages
        //     })
        //     .then(res=>{
        //         settweetContent("");
        //         setTweeting(false);
        //         setuploadImages(null);
        //         setuploadedAmount(0);
        //     })
        //     .catch(err=>{
        //         alert("Something Fishy Happend Can't Post...Please try again...");
        //         setTweeting(false);
        //         setuploadedAmount(0);
        //         setuploadedNumber(1);
        //     });
        // }
    }
    const imageSourceChangeHandler = (e)=>{
        e.preventDefault();
        if(e.target.files[0]){
            setuploadImages([e.target.files[0],e.target.files[1]]);
        }else{
            setuploadImages(null)
        }
    }

    return (
        <div className="selftweet">
            <div className="selftweet__body">
                <Avatar className="selftweet__body__avatar" src={props.user.photoURL} alt="avatar" >{props.user.displayName[0]}</Avatar>
                <textarea value={tweetContent} 
                        onChange={(e)=>{if(tweetContent.length<300 || e.target.value.length<300){settweetContent(e.target.value)}}} 
                        placeholder="What's Happening......?"/>
            </div>
            <div className="selftweet__tweet">
                <div className="selftweet__tweet__details">
                    <label className="image__uploader"><PhotoLibraryIcon id="image__uploader__label"/> <input type="file" multiple max={2} onChange={(e)=>{imageSourceChangeHandler(e)}} /></label>
                    <p style={{color: uploadImages?uploadImages.length===2?"red":"grey":"grey"}}>{uploadImages?uploadImages.length:0}/2 Images</p>
                    <p style={{color: tweetContent.length>250?"red":"grey"}}>{tweetContent.length}/300 Words</p>
                    <p style={{display: tweeting?"initial":"none",color: "green",fontWeight: 900}}>Uploading Image: {uploadedAmount}% {uploadedNumber}/{uploadImages?uploadImages.length:0}</p>
                </div>
                <Button disabled={tweeting || tweetContent.trim()==="" } onClick={(e)=>{tweetTWEET(e);}} className="selftweet__button">Tweet</Button>
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
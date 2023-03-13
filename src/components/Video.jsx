import { useState } from 'react';

const Video = ({thumbnail, title, dateAdded, channel, description, rate}) => {
    const [stars, setStars] = useState(rate)  //Hook!!

    const setRate = () => {
        setStars(stars+1)
    }

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{title}</h3>
            <p><button onClick={setRate}>Rate</button> {stars} stars</p>
            <p>Upload date: {dateAdded}</p>
            <h4>Channel's Title: {channel}</h4>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;
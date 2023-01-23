import React, { useState, useEffect } from "react";
import { Video } from '../types';
import Player from "../player/Player";

const Home = () => {
    const [videoList , setVideoList] = useState([]);
    const [activeVideo, setActiveVideo] = useState<HTMLVideoElement>();

    const getVideos = async () => {
        try {
            const response = await fetch('http://localhost:4000/videos');
            const data = await response.json();
            setVideoList(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleVideoState = (event: React.SyntheticEvent) => {
        const elem = event && event.target as HTMLVideoElement;
        if(activeVideo && activeVideo !== event.target) {
            activeVideo.pause();
        }
        setActiveVideo(elem);
    }
    
    useEffect(() => {
        getVideos();
    },[]);
    
    return (
        <div className="container">
            <div className="row">
                {
                    videoList.map((video: Video) => <Player key={video.id} {...video} handleVideoState={handleVideoState}/>)
                }
            </div>
        </div>
    )
}

export default Home;
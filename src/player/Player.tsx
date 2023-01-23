import { Video } from '../types';
import './Player.css';

const Player = ({id, name, handleVideoState}: Video) => {
    return (
        <div className="col-md-4 player">
            <div className="card">                
                <div className="card-body">
                    <video 
                        onPlay={handleVideoState}
                        width="320" 
                        height="240" 
                        controls 
                        crossOrigin="anonymous"
                        poster={`http://localhost:4000/video/${id}/poster`}>
                        <source src={`http://localhost:4000/video/${id}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>  
                </div>
                <div className="card-footer">
                    <div>Name: {name}</div>
                </div>
            </div>               
        </div>
    )
}

export default Player;
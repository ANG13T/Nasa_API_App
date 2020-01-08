import React,{Component} from 'react';
import axios from 'axios';
import '../styles/Post.css';

class Post extends React.Component {
    state = {
        post: null,
        image: null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://api.nasa.gov/EPIC/api/natural/images?api_key=hzYniRWWJjQwKm1nt8fKGGv7gX0BF8Iq6AKC8fNz')
        .then(res => {
            var data = res.data
            data.map(indivData => {

                if(indivData.identifier === id){
                    this.setState({post: indivData})
                    var year = this.state.post.date.slice(0,4)
                    var month = this.state.post.date.slice(5,7)
                    var date = this.state.post.date.slice(8,10)
                    var image = "https://epic.gsfc.nasa.gov/archive/natural/" + year + "/" + month + "/" + date + "/png/" + this.state.post.image + ".png";
                    this.setState({image: image})
                    console.log(indivData)
                } else{
                    console.log("Nope")
                }
           
            })
        })

    }

    render(){
        const post = this.state.post ? (
                
     
            <div className="post">
                <img src={this.state.image} alt="Earth Image" id="landscape-image"/>
                <div className="container posts-container">
                    <ul>
                        <h3 className="title">Date:</h3>
                        <li>{this.state.post.date.slice(0,10)}</li>
                        <h3 className="title">Geographical Coordinates:</h3>
                        <li>Lat: {this.state.post.centroid_coordinates.lat}</li>
                        <li>Long: {this.state.post.centroid_coordinates.lon}</li>
                        <h3 className="title">Position of the satellite:</h3>
                        <li>X: {this.state.post.dscovr_j2000_position.x}</li>
                        <li>Y: {this.state.post.dscovr_j2000_position.y}</li>
                        <li>Z: {this.state.post.dscovr_j2000_position.z}</li>
                        <h3 className="title">Position of Moon:</h3>
                        <li>X: {this.state.post.lunar_j2000_position.x}</li>
                        <li>Y: {this.state.post.lunar_j2000_position.y}</li>
                        <li>Z: {this.state.post.lunar_j2000_position.z}</li>
                        <h3 className="title">Position of Sun:</h3>
                        <li>X: {this.state.post.sun_j2000_position.x}</li>
                        <li>Y: {this.state.post.sun_j2000_position.y}</li>
                        <li>Z: {this.state.post.sun_j2000_position.z}</li>
                        <h3 className="title">Satellite Attitude:</h3>
                        <li>Q0: {this.state.post.attitude_quaternions.q0}</li>
                        <li>Q1: {this.state.post.attitude_quaternions.q1}</li>
                        <li>Q2: {this.state.post.attitude_quaternions.q2}</li>
                        <li>Q3: {this.state.post.attitude_quaternions.q3}</li>
                    </ul>
                </div>
            </div>
        ) : (
            <div className="center">Loading Post</div>
        )
        return(
            <div className="post">
                {post}
            </div>
        )
    }
}

export default Post;
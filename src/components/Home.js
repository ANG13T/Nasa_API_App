import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import '../styles/Home.css';

class Home extends React.Component {
    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('https://api.nasa.gov/EPIC/api/natural/images?api_key=hzYniRWWJjQwKm1nt8fKGGv7gX0BF8Iq6AKC8fNz')
        .then(res => {
            console.log(res)
            console.log(res.data)
            this.setState({
                posts: res.data.slice(0,20)
            })
        })
    }

    render(){
        const {posts} = this.state
        const postList = posts.length ? (
            posts.map(post => {
                var year = post.date.slice(0,4)
                var month = post.date.slice(5,7)
                var date = post.date.slice(8,10)
                var image = "https://epic.gsfc.nasa.gov/archive/natural/" + year + "/" + month + "/" + date + "/png/" + post.image + ".png";
     
                return(
                    <div className="post card" key={post.identifier}>
                        <div className="card-content">
                            <Link to={'/' + post.identifier}>
                            
                            </Link>
                            <span className="card-title">{"Latitude: " + post.centroid_coordinates.lat}</span>
                            <span className="card-title">{"Longitude: " + post.centroid_coordinates.lon}</span>
                            <img className="materialboxed image" src={image} />
                            <p>{post.earth_date}</p>
                        </div>
                    </div>
                )
            })
        ) : (
           console.log("Data could not be found")
        )
        return(
            <div className="section">
            {postList}
        </div>
        )
    }  
}

export default Home;
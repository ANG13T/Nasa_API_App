import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends React.Component {
    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hzYniRWWJjQwKm1nt8fKGGv7gX0BF8Iq6AKC8fNz')
        .then(res => {
            console.log(res)
            console.log(res.data.photos)
            this.setState({
                posts: res.data.photos.slice(0,20)
            })
        })
    }

    render(){
        const {posts} = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            
                            </Link>
                            <span className="card-title">{post.camera.full_name}</span>
                            <img class="materialboxed" width="650" src={post.img_src} />
                            <p>{post.earth_date}</p>
                        </div>
                    </div>
                )
            })
        ) : (
           console.log("Data could not be found")
        )
        return(
            <div className="container">
            <h4 className="center">Home</h4>
            {postList}
        </div>
        )
    }  
}

export default Home;
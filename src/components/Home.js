import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

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
                return(
                    <div className="post card" key={post.identifier}>
                        <div className="card-content">
                            <Link to={'/' + post.identifier}>
                            
                            </Link>
                            <span className="card-title">{post.caption}</span>
                            <img className="materialboxed" width="650" src={post.image} />
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
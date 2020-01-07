import React,{Component} from 'react';
import axios from 'axios';

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
                } else{
                    console.log("Nope")
                }
           
            })
        })

    }

    render(){
        const post = this.state.post ? (
                
     
            <div className="post">
                <h4 className="center">{this.state.post.identifier}</h4>
                <img src={this.state.image} alt="Earth Image"/>
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
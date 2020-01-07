import React from 'react';
import '../styles/About.css';

const About = (props) => {
    return(
        <div className="container">
            <h3>About</h3>
            <div className="text-container">
            <p>This site was made using React by Angelina Tsuboi. Also lots of thanks to the <a href="https://api.nasa.gov/">NASA API</a> for providing the data used in this app. If you would like to check out more of my projects you can head over to my <a href="https://github.com/angelina-tsuboi">github account</a> to see more of my content.</p>
            </div>
        </div>
    )
}

export default About;
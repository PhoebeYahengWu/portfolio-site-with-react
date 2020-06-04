import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924_960_720.png"
                        alt="avatar"
                        className="avatar-img"
                    />
               

                <div className="banner-text">
                    <h1>Computer Science</h1>
                    <hr/>
                    <p>Java | Machine Learning | Artificial Intelligence | Big Data</p>
                <div className="social-links">

                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>

                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>

                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook-square" aria-hidden="true"/>
                    </a>

                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-twitter-square" aria-hidden="true"/>
                    </a>

                </div>
                
                </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landing;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924_960_720.png" alt="avatar"
                            style={{height: '200px'}}/>

                        </div>

                        <h2 style={{paddingTop: '2em'}}>Tulsi Chandan</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #27221F', width: '100%'}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum fugiat nulla pariatur.</p>
                        <hr style={{ borderTop: '3px solid #27221F', width: '100%'}}/>
                        <h5>Address</h5>
                        <p>New York, NY</p>
                        <h5>Phone</h5>
                        <p>(218) 215-0111</p>
                        <h5>Email</h5>
                        <p>tchandan11@gmail.com</p>
                        <h5>Web</h5> 
                        <p>tulsichandan.com</p>
                       
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2019}
                            endYear={2021}
                            schoolName="New York University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />

                        <Education 
                            startYear={2013}
                            endYear={2017}
                            schoolName="IIT"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />

                        <hr style={{borderTop: '3px solid #fff'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2017}
                            endYear={2019}
                            jobName="First Job"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />

                        <Experience 
                            startYear={2017}
                            endYear={2017}
                            jobName="Second Job"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />

                        <hr style={{borderTop: '3px solid #fff'}}/>

                        <h2>Skills</h2>

                        <Skills skill="Java"
                            progress={90}
                        />

                        <Skills skill="Machine Learning"
                            progress={70}
                        />

                        <Skills skill="Data Analytics"
                            progress={80}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Tulsi Chandan</h2>
                    <img src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924_960_720.png" alt="avatar"
                        style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum fugiat nulla pariatur.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', paddingLeft: '2px', fontFamily: 'Anton'}}>
                           
                             (218) 215-0111</ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                            tchandan11@gmail.com</ListItemContent>
                        </ListItem>
  
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
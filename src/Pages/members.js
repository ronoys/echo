import { Grid } from '@mui/material';
import React from 'react';
import BasicCard from '../Cards';

const members = [
    {name: 'Ronoy', role: 'Web Liaison', description: 'Ronoy is a Computer Science major interested in machine learning and AI. He enjoys debating, working out, and reading.'},
    {name: 'Rajit', role: 'Team Liaison', description: 'Rajit is a Computer Engineering student interested in interfacing machine learning with microelectronics. He enjoys working with battlebots, ice skating, and volunteering with cultural organizations on campus.'},
    {name: 'Pruthav', role: 'Researcher', description: 'Pruthav is a Electrical Engineering major interested in robotics and machine learning. In addition to Gemstone, I am involved with the Terps Racing EV Team as a high voltage lead. I enjoy playing basketball and video games in my free time.    '},
    {name: 'Bhargav', role: 'Web Liaison', description: 'Bhargav is a Computer Science major interested in Machine Learning and Game Development. He enjoys playing the violin, soccer, and thrifting.    '},
    {name: 'Sam', role: 'Researcher', description: 'Sam is a Computer Science major who is focused on game design/development. He likes to spend his time fencing, creating digital art, and playing video games.    '},
    {name: 'Perfect', role: 'Library Liaison', description: 'Perfect is a Neuroscience major with an interest in neurological processings and disorders. She enjoys a good book, playing her guitar and watching classic sitcoms.'},
    {name: 'Lily', role: 'Researcher', description: 'Lily is a computer science major hoping to learn more about AI.  She enjoys reading, eating spicy food, and listening to music.     '},
    {name: 'Chelsea', role: 'Financial Liaison', description: 'Chelsea is a business major interested in learning more about AI and machine learning. She enjoys trying new food, knitting, and listening to music.'},
    {name: 'Rahul', role: 'Mentor Liaison', description: 'Rahul is a Computer Science major interested in AI and Cybersecurity. He enjoys basketball, playing the guitar, and listening to podcasts.    '},
    {name: 'Kevin', role: 'Researcher', description: 'Kevin is a Computer Science major interested in Computer Vision and Algorithmic Enhancements. He spends his time listening to music, cooking, and playing video games.    '},
    {name: 'Dr. Sahil Shah', role: 'Mentor', description: 'Department of Electrical and Computer Engineering in the A. James Clark School of Engineering'},
    {name: 'Jodi Coalter', role: 'Librarian', description: 'University of Maryland, College Park'}
]

function Members(props) {
    return (
        <div>
            <Grid container spacing ={3}>
                
            {members.map(a => <BasicCard name = {a.name} role = {a.role} description = {a.description} />)}
            
            </Grid>
            
        </div>
    );
}

export default Members;
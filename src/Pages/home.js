import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import SimpleAccordion from '../accordion';
import gemsLogo from './Logos/gemstoneLogo.png'
import honorsLogo from './Logos/honorsLogo.png'

function Home(props) {
    return (
        <div>
            <Box sx ={{
                '& > :not(style)': {
                    m: 1,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 10,
                  },
            }}>
                <Paper elevation = {5} sx = {{
                    backgroundColor: "#497de6",
                }}>
                <Typography 

                    variant = 'h5'
                    sx={{
                        fontSize: 30,
                        textAlign: 'center',
                        paddingLeft: 5,
                        paddingTop: 5,
                        paddingBottom: 5,
                        color: 'white'
                        
                    }}

                    /*color = '#497de6'*/
                >Team Echo - Class of 2025</Typography>
                {/* <Typography sx={{
                        fontSize: 30,
                        textAlign: 'left',
                        paddingLeft: 5,
                        paddingTop: 5
                    }}>Research Problem: </Typography>
                <Typography sx={{
                        fontSize: 30,
                        textAlign: 'left',
                        paddingLeft: 5,
                        paddingTop: 5
                    }}>Research Question: </Typography>
                <Typography sx={{
                        fontSize: 30,
                        textAlign: 'left',
                        paddingLeft: 5,
                        paddingTop: 5
                    }}>Contact: </Typography> */}
                
                    <SimpleAccordion />
                </Paper>

                <img align='left' src={gemsLogo} alt='Gems Logo'/>
                <img align='right' src={honorsLogo} alt='Honors College Logo'/>

            </Box>
            
        </div>
    );
}

export default Home;
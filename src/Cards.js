import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



export default function BasicCard(props) {
  return (
    <Grid item>
    <Card sx={{
         width: 210, 
         height: 300
         }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.role}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
  );
}

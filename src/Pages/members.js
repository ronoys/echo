import { Grid } from '@mui/material';
import React from 'react';
import BasicCard from '../Cards';

const members = [
    {name: 'Name1', role: 'Role1', description: 'Description1'},
    {name: 'Name2', role: 'Role2', description: 'Description2'},
    {name: 'Name3', role: 'Role3', description: 'Description3'},
    {name: 'Name4', role: 'Role4', description: 'Description4'},
    {name: 'Name5', role: 'Role5', description: 'Description5'},
    {name: 'Name6', role: 'Role6', description: 'Description6'},
    {name: 'Name7', role: 'Role7', description: 'Description7'},
    {name: 'Name8', role: 'Role8', description: 'Description8'},
    {name: 'Name9', role: 'Role9', description: 'Description9'},
    {name: 'Name10', role: 'Role10', description: 'Description10'},
    {name: 'Name11', role: 'Role11', description: 'Description11'},
    {name: 'Name12', role: 'Role12', description: 'Description12'}
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
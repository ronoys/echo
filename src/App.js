import './App.css';

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Home from './Pages/home'
import Members from './Pages/members'
import Research from './Pages/research'
import Timeline from './Pages/timeline'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">

        Team ECHO
        
      </header>
      <div className="Tabs">
      <Box sx={{ width: '100%' }}>
      <Box sx={{ height: '20%'}}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        textColor = "primary"
        indicatorColor = "primary" 
        variant = 'fullWidth'

        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Members" {...a11yProps(1)} />
          <Tab label="Research" {...a11yProps(2)} />
          <Tab label="Timeline" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Members />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Research />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Timeline />
      </TabPanel>
    </Box>

    </div>
      
    </div>
  );
}

export default App;

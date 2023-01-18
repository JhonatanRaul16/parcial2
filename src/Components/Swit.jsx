import { Box, Switch, Typography } from '@mui/material';
import React, { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const Swit = () => {
    const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <WbSunnyIcon sx={{color:'rgb(117,117,117)'}}/>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Box>
    </>
  )
}

export default Swit
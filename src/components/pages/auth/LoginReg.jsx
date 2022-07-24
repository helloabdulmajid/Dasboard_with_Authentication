import {Card, Grid, Tab, Tabs} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react';
import Das1 from '../../../images/das1.png'

const TabPanel=(props)=>{
const {children,value,index}=props;
return(
    <div role='tabpanel' hidden={value!==index}>

        {
            value===index &&(
                <Box>
                    {children}
                </Box>
            )
        }
    </div>
)
}


const LoginReg = () => {
    const[value,setValue]=useState(0)
    const handleChange=(event,newValue)=>{
        setValue(newValue);
    }
  return (
<>
<Grid container sx={{height:'90vh'}}>
    <Grid item lg={7} sm={5} sx={{
        backgroundImage: `url(${Das1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'

    }}>
    </Grid>

    <Grid item lg={5} sm={7}>
        <Card sx={{width:'100%',height:'100%'}}>
            <Box>
                <Box sx={{borderBottom:1, borderColor:'divider'}}>
                    <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                        <Tab label="Login" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                        <Tab label="Registration" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>User Login</TabPanel>
                <TabPanel value={value} index={1}>Registration</TabPanel>

            </Box>
        </Card>
    </Grid>
</Grid>
</>
    )
}

export default LoginReg
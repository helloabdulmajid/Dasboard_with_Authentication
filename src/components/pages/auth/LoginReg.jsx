import {Grid, Card, Typography ,Tabs ,Tab,Box} from '@mui/material'
import Das1 from '../../../images/das1.png'
const LoginReg = () => {
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
</Grid>
</>
    )
}

export default LoginReg
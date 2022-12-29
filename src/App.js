
import {AppBar, Box, Button, Container, ThemeProvider, Typography} from '@mui/material';
import { useEffect } from 'react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Products from './components/products';
import Promotions from './components/promotions';
import theme from './styles/theme';

function App() {

  useEffect(() =>{
    document.title ="React Material Ui- Home"
},[]);

  return (
    <ThemeProvider theme={theme}>
          <Container 
    maxWidth ="xl" 
    sx={{
      background:'#fff'
    }}
     >
      
      <Appbar/>
      <Banner/>
      <Promotions/>
      <Box display= "flex" justifyContent="center" sx={{ p: 4 }} >
        <Typography variant='h4'>Our Products</Typography>
      </Box>
      <Products/>
{
  /*
  footer
  searchbox
  appdrawer
  */ 
}

     
     </Container>
    </ThemeProvider>

  );
}

export default App;

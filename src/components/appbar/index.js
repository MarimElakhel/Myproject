import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktob from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";


export default function Appbar(){
  
       const theme = useTheme(); 
       const matches = useMediaQuery(theme.breakpoints.down('md'));
    
    return(
        <>
        {matches ?  ( <AppbarMobile matches={matches}/>)
         :(<AppbarDesktob matches={matches} />) }
        </>

    );
}
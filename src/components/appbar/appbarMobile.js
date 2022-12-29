import { IconButton } from "@mui/material";
import { AppbarHeader, AppberContainer } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";


export default function AppbarMobile({matches}){
    return (
        <AppberContainer>
             <IconButton>
                    <MenuIcon/>
             </IconButton>
             <AppbarHeader textAlign={"center"} variant="h4">
                Store
             </AppbarHeader>
             <IconButton>
                <SearchIcon />
             </IconButton>
             <Actions matches={matches}/>
        </AppberContainer> 
     );
}
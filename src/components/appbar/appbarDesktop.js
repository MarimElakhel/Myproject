import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {  AppbarHeader, AppberContainer, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";


export default function AppbarDesktob({matches}){

    
    return (
        
                <AppberContainer>
                    <AppbarHeader>Store</AppbarHeader>
                    <MyList type ="row">
                        <ListItemText primary ="Home" />
                        <ListItemText primary ="Categories" />
                        <ListItemText primary ="Products" />
                        <ListItemText primary ="Contact Us" />
                        <ListItemButton>
                            <ListItemIcon>
                                <SearchIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </MyList>
                    <Actions matches={matches} />
            </AppberContainer> 
       
       
    );
}
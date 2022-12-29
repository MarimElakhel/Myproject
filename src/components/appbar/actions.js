import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContatinerDesktop, ActionIconsContatinerMobile, MyList } from "../../styles/appbar";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person";
import FaveriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";


export default function Actions({matches}){
    const Components = matches 
    ? ActionIconsContatinerMobile
    : ActionIconsContatinerDesktop;

    return(
        <Components>
            <MyList type ="row" >
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                >
                    <ListItemIcon  
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary, 
                        }}
                    >
                        <ShoppingCardIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                >
                    <ListItemIcon  
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary, 
                        }}
                    >
                        <FaveriteIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent:'center'
                    }}
                >
                <ListItemIcon  
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary, 
                        }}
                    >
                        <PersonIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </MyList>
        </Components>
    )
}
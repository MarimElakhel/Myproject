import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme(); 
    const matches = useMediaQuery(theme.breakpoints.down('md'));
return(
    <BannerContainer>
        <BannerImage src="/images/banner/banner.png"/>
        <BannerContent>
            <Typography variant=" h6"> </Typography>
            <BannerTitle variant="h2">
            Bags
            </BannerTitle>

            <BannerDescription variant="subtitle">
            Demond Quality, not just in the Products you buy,but in the life of the person who made it.    
            </BannerDescription>
        
         
    
        
        </BannerContent>
    </BannerContainer>
    
); 


}
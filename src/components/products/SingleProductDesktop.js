import { useState } from "react";
import {Product,ProductActionButton,ProductActionsWrapper,ProductAddToCart,
  ProductFavButton,
  ProductImage,} from "../../styles/product";
import { Stack,Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ProductMeta from "./ProductMeta";

export default function SingleProductDesktop({ product, matches }) {

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return(
    <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image} />
            <ProductFavButton isFav ={0} >
                <FavoriteIcon />
                {
                    (showOptions)&& (
                        <ProductAddToCart show={showOptions} variant="contained">
                          Add to cart
                        </ProductAddToCart>)
                }
            </ProductFavButton>
            
            <ProductActionsWrapper show={showOptions}>
                <Stack direction="column">
                    <ProductActionButton>
                        <ShareIcon color ="primary" />
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreenIcon color ="primary" />
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product ={product} matches={matches} />
    
    </>
    
);
}
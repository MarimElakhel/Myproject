import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";
import '../../styles/product/product.css';
export default function ProductMeta({ product, matches }) {
    return (
      <>
      <ProductMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"}>
          EGP {product.price}
          
            <h3><del>EGP {product.price*2}</del></h3>
      
        
        </Typography>
        
        <button className="btn">Order Now</button>
      </ProductMetaWrapper>
    
      </>
    );
}
import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

/*const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: "$5" , image: "https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw6ca64fdc/content/seasonal-content/homepage/2021/05/endorphinshift-d.jpg"},
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: "$15", image: "https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP-1024-80.jpg.webp" }
];*/

const Products = ({products}) => {
    const classes = useStyles();

    return (<main className={classes.content}>
    <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}

        </Grid>
    </main>);

}

export default Products;


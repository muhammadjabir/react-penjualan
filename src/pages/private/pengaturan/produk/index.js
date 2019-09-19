import React from 'react';
import {Switch,Route} from 'react-router-dom'
import EditProduct from './edit';
import GridProduct from './grid';
function product(){
    return (
        <Switch>
            <Route path='/product/edit/:productid' component={EditProduct}/>
            <Route component={GridProduct} />
        </Switch>
    )
}

export default product;
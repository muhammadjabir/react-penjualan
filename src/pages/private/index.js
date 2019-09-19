import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Pengaturan from './pengaturan'
import product from './pengaturan/produk'
import Transaksi from './transaksi'
import Home from './home'
function Private(){
    return (
        <Switch>
        <Route path='/pengaturan' component={Pengaturan}/>
        <Route path='/product' component={product}/>
        <Route path='/transaksi' component={Transaksi}/>
        <Route path='/' component={Home}/>
        </Switch>
    )
    
}

export default Private
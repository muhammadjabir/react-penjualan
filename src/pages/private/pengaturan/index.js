import React from 'react'
import {Redirect, Route,Switch} from 'react-router-dom'
import pengguna from './pengguna'
import Toko from './toko'
function Pengaturan(){
    return (
        <Switch>
            <Route path="/pengaturan/pengguna" component={pengguna}/>
            <Route path="/pengaturan/toko" component={Toko}/>
            <Redirect to='/pengaturan/pengguna'/>
        </Switch>
    )
}

export default Pengaturan

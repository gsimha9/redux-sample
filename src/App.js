import React from 'react'
import { connect } from 'react-redux'
import { IncAction } from './action'
import { DecAction } from './action'

const App = ({local_varaiable, IncAction,DecAction}) => {
    return(
        <div>
        <center>
            <h1>    {local_varaiable}</h1><br/>
            <button onClick={IncAction} >IncAction</button>
            <button onClick={DecAction} >DecAction</button>
        </center>
        </div>
    )
}
const mapStateToProps = state => ({
    local_varaiable: state
})

export default connect(mapStateToProps,{IncAction, DecAction})(App) 
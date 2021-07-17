import React from 'react'
import './Store.css'

class Store extends React.Component{
    render (){
        return (
            <>
            <div className='main-div'>
                <div className='inner-div'>
                <p><b>Start</b> : {this.props.data.start}</p>
            <p><b>End</b> : {this.props.data.end}</p>
            <p><b>Start Save</b>: {this.props.data.startSave} </p>
            <p><b>End Save</b> : {this.props.data.endSave}</p>
                </div>
            </div>
            </>
        )
    }
}
 export default Store;
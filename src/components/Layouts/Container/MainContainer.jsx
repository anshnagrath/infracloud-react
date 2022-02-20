import React, {Component } from 'react';
import '../../../global.css';
import { connect } from 'react-redux';
import FlashMessage from '../../FlashMessage/FlashMessage';




class MainContainer extends Component {  

    render() {
        return (
          
         
                  <div>
                      { this.props.children }  
                    {  this.props.error && this.props.error.length > 0 ? <FlashMessage type={'error'} message={this.props.error}/> : <div></div> }
                  </div>
     
          

        );
    }

   
   
}

function checkError(state){
        let error  = ''
        Object.keys(state).forEach((module)=>{

            error = module['error']

        })
        return error

}


function mapStateToprops(state) {
    let error = checkError(state)
    return {error}
}

function mapDispatchToProps(dispatch) {
    return { };
}
export default connect( mapStateToprops, mapDispatchToProps)(MainContainer);


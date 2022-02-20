import React, { Component } from 'react';
import './spinner.css';
import { connect} from 'react-redux';

class Spinner extends Component {

    state = { }
    render(){
       
        const { requesting  } = this.props;
        if (!requesting) return null;

        return (
            <div className="loader-wrapper">
                <div className="spinner">
                </div>
            </div>
        );
    }
    
}


function mapStateToProps(state) {

   let allModuleState =    Object.keys(state);
   let obj = {requesting : false }
   for(let moduleState of allModuleState){

         if( state[moduleState]['requesting'] ) obj['requesting'] =  state[moduleState]['requesting']    

   }

   return obj

 }
    
export default connect(mapStateToProps)(Spinner);
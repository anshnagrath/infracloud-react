import React, { Component } from 'react';
import {withRouter} from  'react-router-dom';
import './NavBar.css';
import { connect} from 'react-redux';
import { getFromSession } from '../../helpers/session';
class NavAndSideBar extends Component {

  constructor(props) {
    super(props);
  }

  getNavbarValue(name){
    let sessionCheck =  getFromSession('name');
    if( sessionCheck && sessionCheck.length > 0){
      let firstAlphabet = sessionCheck[0].toUpperCase();
      return (  <div className="profile-circle">{ firstAlphabet }</div> )

    }else{
      return (  <div> Welcome </div> )
    }
  }

  render() {
  
   
    return (
    
      <div>
        <header>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 pl-0">
               
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-end">
                
                <div className="user_profile">
                  <div className="btn-group">
                    <button type="button" className=" " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className="user-block">
                      
                         {this.getNavbarValue(this.props.name)}
                     
                         
                        
                        <div className="profile-icon">
                      
                        </div>
                      </div>

                    </button>
          
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
       
      </div>
        
    )


   
  }





}


function mapStateToProps({login}) {

  return { name : login.name }
}


export default connect(mapStateToProps)(withRouter(NavAndSideBar));


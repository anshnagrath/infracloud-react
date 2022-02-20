import React, {Component} from 'react';

class FlashMessage extends Component {

    state = {
           
        hideMe : false,
       
    } 
    timerId =  ''

    constructor(props) {
        super(props);
    }

    render() {
;
        return (
           !this.state.hideMe ? 
            <div className={`alert alert-${this.props.type.toLowerCase() == 'error' ? 'danger' : this.props.type.toLowerCase() }`} role="alert">
            <div className="d-flex flex-row align-items-center">
                <div className="icon">
                 
                         { this.getSVCPath( this.props.type  )}

                
                </div>
                <div className="info"><h3>{this.props.type}</h3>
                    <p>{this.props.message}</p></div>
                <div className="close" onClick={()=>{this.setState({hideMe:true})}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4115 12.0003L18.6886 17.2822C19.079 17.6729 19.0787 18.306 18.688 18.6964C18.2973 19.0867 17.6641 19.0864 17.2738 18.6957L11.9963 13.4135L6.70658 18.6953C6.31577 19.0856 5.6826 19.0851 5.29237 18.6943C4.90213 18.3035 4.9026 17.6703 5.29342 17.2801L10.5827 11.9986L5.29565 6.70679C4.9053 6.31609 4.90559 5.68292 5.29629 5.29257C5.68699 4.90223 6.32016 4.90251 6.7105 5.29321L11.998 10.5855L17.2739 5.31734C17.6648 4.92711 18.2979 4.92758 18.6881 5.31839C19.0784 5.70921 19.0779 6.34237 18.6871 6.73261L13.4115 12.0003Z" fill="#696974" />
                </svg></div>
            </div>

        </div> : ''
        )
    }

    resetMessage() {
        this.timerId = setTimeout(() => {
          this.setState({ hideMe: true });
        //    this.timerId = null;
        }, 5000);
      }

    getSVCPath( type  ){


            this.resetMessage();    
            switch (type) {
                case 'Info':
                      

                  return   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    
                            <path d="M11 8V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8Z" fill="#0062FF" />
                            <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#0062FF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" fill="#0062FF" />
                            </svg>

                  
                
                case 'Success':
                    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2574 11.4741L18.2147 1.38089C18.5566 0.947176 19.1854 0.872772 19.6191 1.2147C20.0528 1.55663 20.1272 2.1854 19.7853 2.61911L11.1131 13.6191C10.736 14.0975 10.0225 14.1304 9.60293 13.6888L5.27509 9.13437C4.89465 8.73402 4.9108 8.10106 5.31116 7.72062C5.71152 7.34019 6.34448 7.35633 6.72491 7.75669L10.2574 11.4741ZM18 9.1C18 8.54772 18.4477 8.1 19 8.1C19.5523 8.1 20 8.54772 20 9.1V16.3C20 18.3435 18.3435 20 16.3 20H3.7C1.65655 20 0 18.3435 0 16.3V3.7C0 1.65655 1.65655 0 3.7 0H14.4C14.9523 0 15.4 0.447715 15.4 1C15.4 1.55228 14.9523 2 14.4 2H3.7C2.76112 2 2 2.76112 2 3.7V16.3C2 17.2389 2.76112 18 3.7 18H16.3C17.2389 18 18 17.2389 18 16.3V9.1Z" fill="#3DD598" />    
                   </svg>
                    
                case 'Warning':
                      return  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M11 8V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8Z" fill="#FFC542" />
                                <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#FFC542" />
                            </svg>
           
                case 'Error':

                    return  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M11 8V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8Z" fill="#FC5A5A" />
                            <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#FC5A5A" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" fill="#FC5A5A" />
  
                        </svg>
                        
                
            }

           
    }


componentWillUnmount (){
    if(this.timerId ) window.clearTimeout(this.timerId);
    this.setState({ hideMe : true })
  }
}

export default FlashMessage;



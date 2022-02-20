import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './comment.css';
import { comentModuleInit , comentModulePageChange } from './actions';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';

class Comment extends Component {
    constructor(props) {
        super(props);


    }


    componentDidMount(){
        this.props.onPageInit({ id : this.props.match.params.id })
    }



   handlePaginationChange = (pageNumber) =>{
    this.props.onPageChange({pageNumber});
   }

    render() {
  
        return (
            <div className='mt-10'>

             <div className='heading text-center'>
                 
                  <h4> All Comment For Post Id : { this.props.match.params.id } </h4>
                 </div>   
          
            <div className="mt-10 row px-32 scroll">
              
                {
                    this.props.comments.map( (o,i) =>   <Card key={i} title ={o.email} body={o.body} /> )
                }
                
              
            </div>
            <div className="float-right pagination">
                       <Pagination total={this.props.commentCount} handlePageChange={this.handlePaginationChange} /> 
                 </div>
            </div>



        );
    }
}


function mapStateToprops({comment}) {
    return comment
}

function mapDispatchToProps(dispatch) {
    return {
        onPageInit: ( postObj ) => {

            dispatch(comentModuleInit(postObj));
           

        },
        onPageChange : (pageNumber) => { 

            dispatch(comentModulePageChange(pageNumber))
        }

    };
}
export default connect(
    mapStateToprops,
    mapDispatchToProps,
)(withRouter(Comment));
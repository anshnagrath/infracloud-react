import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../../global.css';
import './post.css';
import { postModuleInit, postModulePageChange } from './actions';
import DataTable from 'react-data-table-component';
import history from '../../config/history';


class Post extends Component {
     columns = [
        {
            name: 'SR No./Post Id',
            selector: (row) =>  row.id
        },

        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Descriptions',
            selector: row => row.body,
        },
       
    ];

   customStyles = {
     
        cells: {
            style: {
                width:'50px'
            },
        },
    };

    limit = 10;

    constructor(props) {
        super(props);


    }



    componentDidMount() {
       
        this.props.onPageInit()
    }



    handlePaginationChange = (newPerPage) => {
        this.props.onPageChange({ limit : this.limit, pageNumber : (newPerPage - 1)  * this.limit  });
    }

    handleRowChange = ( limit , page) => {
        this.limit = limit
        this.props.onPageChange({  limit , pageNumber :  (page - 1)  * this.limit });
    }

    onRowClick (rowData) {
        const id = rowData.id;
        history.push(`comments/${id}`)

    }
    render() {

       


        return (
            <div className='mt-10'>

           

                <div className="">

                    <DataTable title="All Post" 
                       progressPending={ this.props.post.length == 0 ? true : false }
                       columns={this.columns} 
                       paginationServer 
                       pagination
                       onRowClicked={this.onRowClick }
                       paginationTotalRows={this.props.postCount}
                       onChangeRowsPerPage={this.handleRowChange}
                        onChangePage={this.handlePaginationChange} 
                        customStyles={this.customStyles}    
                         data={this.props.post} />

                </div>

            </div>



        );
    }
}


function mapStateToprops({ post }) {
    return post
}

function mapDispatchToProps(dispatch) {
    return {
        onPageInit: () => {

            dispatch(postModuleInit());


        },
        onPageChange: (pageObj) => {

            dispatch(postModulePageChange(pageObj))
        }

    };
}
export default connect(
    mapStateToprops,
    mapDispatchToProps,
)(withRouter(Post));
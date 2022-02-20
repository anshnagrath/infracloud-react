import React, { Component } from 'react';
import './Pagination.css';
class Pagination extends Component {

    state = {

        currentPage : 1

    }
    

    constructor(props) {
        super(props);
    }

    generatePageNumber(numberOfPages , pageChangeHandler){

        let allPages = [ ]
        for(let i = 1 ; i <= numberOfPages ; i++){
            allPages.push( <li key={i} className={ this.state.currentPage === i ? "page-item active" :"page-item"} onClick={(e)=>{ this.setState({  currentPage : i  }); pageChangeHandler( i ) }} ><a className="page-link">{i}</a></li>)
        }
        return allPages;
    }

    handleChange(type  , totalNumberPages ,  handlePageChange ) {

        let nextPageNumber;

        if(type === 'desc' && this.state.currentPage === 1 ||  type === 'desc' && this.state.currentPage === totalNumberPages  ){
            return ;
        }

        switch(type) {
            case 'inc':
                nextPageNumber = this.state.currentPage + 1;
                break;
            default:
                nextPageNumber = this.state.currentPage - 1;  
                break; 

        }
       
        handlePageChange(nextPageNumber)    
        this.setState({ currentPage : nextPageNumber })
    }


    calCulatePageNum(total){
         return Math.ceil(total / 12);
    }

    render() {
       
        let numberOfPages =  this.calCulatePageNum(this.props.total);
        let showPagination = numberOfPages > 1;
        let pageChangeHandler = this.props.handlePageChange;

        if(!showPagination) return <div></div>;

        return (

            <nav>
                <ul className="pagination">
                    <li className= { this.state.currentPage === 1 ? "page-item disabled-pagination" : "page-item" }><a className="page-link" onClick={(e)=>this.handleChange('dec',numberOfPages,pageChangeHandler)} >Previous</a></li>
                    {
                    this.generatePageNumber(numberOfPages , pageChangeHandler)
                    
                    }
                    <li className= { this.state.currentPage === numberOfPages ? "page-item disabled-pagination" : "page-item" }><a className="page-link" onClick={(e)=>this.handleChange('inc' ,numberOfPages, pageChangeHandler)} >Next</a></li>
                </ul>
            </nav>
        )
    }





}

export default Pagination;



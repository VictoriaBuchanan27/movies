import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:'',
        }
    }
    handleInput=(e)=>{
        const {search} = this.state;
        this.setState({search: e.target.value})
        console.log (search)
    }
    // handleOnChange=(e)=>{

    // }
    render(){
        return(
            <>
            <input type="text" onChange={this.handleInput}>Search</input>
            </>
        )
    }
}
export default Search;
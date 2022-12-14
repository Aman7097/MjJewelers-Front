import React ,{useState}from 'react'

const Search = ({history}) => {

    const[keyword,setKeyword] = useState()

const searchHandler= (e)=>{
    e.preventDefault()

    if(keyword.trim()){
        history.push(`/search/${keyword}`)
    }
    else{
        history.push('/')
    }
}
    return (
      
            <form onSubmit= {searchHandler}>
                 <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            className="form-control"
                            placeholder="Enter Product Name ..."
                            onChange={(e)=> setKeyword(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button id="search_btn" className="btn">
                            <img src="https://img.icons8.com/material-outlined/24/000000/search--v2.png" alt=""/>
                            </button>
                        </div>
                    </div>


            </form>
        
    )
}

export default Search

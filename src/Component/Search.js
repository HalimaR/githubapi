import TextField from '@mui/material/TextField';

const Search =({search, setSearch, handleClick}) => {

  const handleChange=(e)=>{
    setSearch(e.target.value)
    console.log(e)
  }

  return (
      <form onSubmit={(e) => e.preventDefault}>
          <label htmlFor="Search"></label>
          <TextField 
          className='search'
            id="search" 
            label="search" 
            type="text"
            variant="standard" 
            value ={search}
            onChange={handleChange}
          />
      </form>
  )
}

export default Search;
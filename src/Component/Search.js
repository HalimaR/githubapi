import TextField from '@mui/material/TextField';

const Search =({search, setSearch}) => {

  const handleChange=(e)=>{
    setSearch(e.target.value);
  }

  return (
      <form onSubmit={(e) => e.preventDefault}>
          <label htmlFor="Search"></label>
          <TextField 
          className='search'
            id="search" 
            label="search" 
            type="search"
            variant="standard"
            data-testid="Search"
            value ={search}
            onChange={handleChange}
          />
      </form>
  )
}

export default Search;
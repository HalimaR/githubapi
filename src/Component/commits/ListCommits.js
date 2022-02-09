import Search from '../Search';
import Commits from './Commits';
import List from '@mui/material/List';

const ListCommits=({search, setSearch, commitList, fetchError}) => {

    return (
      <div>
        <Search
          search={search}
          setSearch={setSearch}
        />
        {commitList.length ? (
          <List >
              {commitList.map(item => (
                !item.message ? (
                  <Commits key={item.sha} item={item} />
                ):(
                  <p>{`Error: ${fetchError}`}</p>
                )
            ))}
        </List>
        ): (
          <p style={{marginTop: `2rem`}}>your list is empty</p>
        )}
      </div>
    );
  }
  
  export default ListCommits;
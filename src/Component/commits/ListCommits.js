import Search from '../Search';
import Commits from './Commits';
import List from '@mui/material/List';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListCommits=({search, setSearch, commitList, fetchError}) => {

    return (
      <div>
        <Search
          search={search}
          setSearch={setSearch}
        />
        {commitList.length ? (
          <List >
            <InfiniteScroll
          dataLength={commitList.length}
          next={commitList}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
              {commitList.map(item => (
                !item.message ? (
                  <Commits key={item.sha} item={item} />
                ):(
                  <p>{`Error: ${fetchError}`}</p>
                )
            ))}
            </InfiniteScroll>
        </List>
        ): (
          <p style={{marginTop: `2rem`}}>your list is empty</p>
        )}
      </div>
    );
  }
  
  export default ListCommits;
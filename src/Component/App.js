import Header from './Header';
import RepoList from './repo/RepoList';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import ListCommits from './commits/ListCommits';

function App() {
  const API_URL = 'https://api.github.com/users/HalimaR/repos';

  const [search, setSearch] = useState('');
  const [repoList, setRepoList] = useState([]);
  const [commitList, setCommitList] = useState([]);
  const [commits_url, setcommits_url] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const fetchComApi = useCallback( async () => {
    try{
      setisLoading(true);
      const reponse = await fetch(`${commits_url}`);
      if(!reponse.ok) throw Error('Did not receive expected data');
      const data = await reponse.json();
      setCommitList((item)=> [...item, ...data]);
      setFetchError(null);
    }catch(err){
      console.log(err);
    }finally{
      setisLoading(false);
    }
  })

  useEffect(() => {
    const fetchRepoApi = async () => {
      try{
        const reponse = await fetch(`${API_URL}`);
        if(!reponse.ok) throw Error('Did not receive expected data');
        const data = await reponse.json();
        setRepoList(data);
        setFetchError(null);
      }catch(err){
        setFetchError(err.message);
      }finally{
        setisLoading(false);
      }
    }
    fetchRepoApi();
  },[])

  useEffect(() => {
    fetchComApi();
  },[commits_url])


  return (
    <div>
      <Header title="Github API"
      />
      {isLoading && <p>Loding items...</p>}
      {!fetchError && !isLoading &&
      <Routes>
        <Route path="/githubapi"
          element={<RepoList
            repoList={repoList}
            setcommits_url={setcommits_url}
          />}
        />
         <Route path='/commits' 
        element={<ListCommits
          search={search}
          setSearch={setSearch}
          fetchError={fetchError}
          commitList={commitList.length ? (commitList.filter(item => ((item.commit.message).toLowerCase()).includes
            (search.toLocaleLowerCase()))):([])}
        />}/>
        </Routes>
          }
    </div>
  );
}

export default App;

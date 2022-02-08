import RepoListItems from "../repo/RepoListItem";
import Grid from '@mui/material/Grid';

const RepoList=({repoList, setcommits_url}) => {
    
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {repoList.map(item => (
          <RepoListItems key={item.id} item={item} setcommits_url={setcommits_url} />
        ))}
      </Grid>
    );
}

export default RepoList;
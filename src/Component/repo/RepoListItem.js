import { Link } from "react-router-dom";
import ListItemText from '@mui/material/ListItemText';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import '../css/RepoListItem.css'

const RepoListItems =({item, setcommits_url}) => {
    const TOTAL_RESULT_PAGE = "?page=1&per_page=20";
    const handleChange=(item)=>{
        const str = item.commits_url.replace("{/sha}","")+TOTAL_RESULT_PAGE;
        setcommits_url(str);
        console.log(str);
    }
    const url= item.commits_url;
    return (
        <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {item.language}
                </Typography>
                <Typography className="private-style" sx={{ fontSize: 14 }} color="text.secondary">
                    {!item.private? "Public" : "Private"}
                </Typography>

                <Typography variant="h5" component="div">
                    {item.full_name}
                </Typography>
            </CardContent>

            <CardActions>
            <Link to="/commits" onClick={() => handleChange(item)}>
                <Button size="small">See Commits
                    <ListItemText primary="" onClick={() => handleChange(item)}/>
                </Button>
            </Link>
            </CardActions>
            </Card>
        </Grid>
    )
  }
  
  export default RepoListItems;
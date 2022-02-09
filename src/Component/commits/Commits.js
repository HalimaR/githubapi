import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import './Commits.css'

const Commits=({item}) => {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="body2" component={'span'}>
          <ListItemText className='committextitem' primary={item.commit.message}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }}  sx={{ fontSize: 14 }} color="text.secondary" component={'span'}>
          {item.commit.author.name} Committed on {moment(item.commit.author.date).format('MM/DD/YYYY')}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Commits;

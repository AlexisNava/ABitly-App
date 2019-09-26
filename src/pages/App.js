import React, { memo, useState } from 'react';

// MUI Components
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Components
import LinksList from '../components/LinksList';

const App = memo(() => {
  const [urlText, setURLText] = useState('');

  return (
    <Paper>
      <div>
        <div>
          <TextField
            label="Shorten your link"
            margin="normal"
            variant="outlined"
            value={urlText}
            onChange={event => setURLText(event.target.value)}
          />
        </div>

        <div>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
      </div>

      <LinksList />
    </Paper>
  );
});

export default App;

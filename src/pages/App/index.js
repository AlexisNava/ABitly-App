import React, { memo, useState } from 'react';

// MUI Components
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Components
import LinksList from '../../components/LinksList';

// Styles
import './App.css';

const App = memo(() => {
  const [urlText, setURLText] = useState('');

  return (
    <Paper className="container container--paper container--vertical-aligment">
      <form className="form container__item">
        <div className="form__item form__item--textfield">
          <TextField
            fullWidth
            label="Shorten your link"
            margin="normal"
            variant="outlined"
            value={urlText}
            onChange={event => setURLText(event.target.value)}
          />
        </div>

        <div className="form__item form__item--button">
          <Button variant="contained" color="primary">
            Shorten
          </Button>
        </div>
      </form>

      <LinksList />
    </Paper>
  );
});

export default App;

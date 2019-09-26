import React, { memo } from 'react';

// MUI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

const links = [
  {
    originalURL: 'https://www.linkedin.com/in/alexisnava/',
    generatedURL: 'https://bit.ly/2kqqbUO',
  },
  {
    originalURL: 'https://www.linkedin.com/in/alexisnava/',
    generatedURL: 'https://bit.ly/2kqqbUO',
  },
  {
    originalURL: 'https://www.linkedin.com/in/alexisnava/dsdsadsadsa',
    generatedURL: 'https://bit.ly/2kqqbUO',
  },
];

const LinksList = memo(() => {
  return (
    <List className="list container__item">
      {links.map(link => (
        <ListItem key={link.generatedURL} className="list__item">
          <ListItemText
            primary={link.originalURL}
            className="list__item__data"
          />

          <Link href={link.generatedURL} className="list__item__data">
            {link.generatedURL}
          </Link>
        </ListItem>
      ))}
    </List>
  );
});

export default LinksList;

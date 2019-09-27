import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

// MUI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

const LinksList = memo(() => {
  const links = useSelector(state => state.getIn(['link', 'links']));

  useEffect(() => {}, [links]);

  return (
    <List className="list container__item">
      {links.map(link => (
        <ListItem key={link.generatedURL} className="list__item">
          <ListItemText
            primary={link.originalURL}
            className="list__item__data"
          />

          <Link href={link.generatedURL} className="list__item__data">
            http://localhost:5001/{link.generatedURL}
          </Link>
        </ListItem>
      ))}
    </List>
  );
});

export default LinksList;

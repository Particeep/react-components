import * as React from 'react';
import {createStyles, Drawer, List, ListItem, ListItemText, Theme, WithStyles, withStyles} from '@material-ui/core';
import {Link, Route} from 'react-router-dom'
import {ReactNode} from 'react';

const styles = (t: Theme) => createStyles({
  drawerPaper: {
    width: 240,
    [t.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
});

interface MenuProps extends WithStyles<typeof styles> {
  open: boolean;
  toggle: () => void;
}

class Menu extends React.Component<MenuProps, {}> {

  render() {
    const {classes} = this.props;
    return (
      <Drawer
        variant="permanent"
        open
        classes={{paper: classes.drawerPaper}}
      >
        <div>
          <List>
            <MenuItem path="/panel">Panel</MenuItem>
            <MenuItem path="/btn">Btn</MenuItem>
            <MenuItem path="/alert">Alert</MenuItem>
            <MenuItem path="/icons">Icons</MenuItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

interface MenuItemProps {
  children: ReactNode;
  path: string;
}

const MenuItem = ({children, path}: MenuItemProps) =>
  <ListItem button>
    <ListItemText>
      <Link to={path} style={{display: 'block', height: '100%'}}>
        {children}
      </Link>
    </ListItemText>
  </ListItem>
;

export default withStyles(styles)(Menu);

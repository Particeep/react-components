import * as React from 'react';
import {createStyles, Drawer, List, ListItem, ListItemText, Theme, WithStyles, withStyles} from '@material-ui/core';
import {Link, Route} from 'react-router-dom'

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
            <ListItem button>
              <ListItemText>
                <Link to="/panel">
                  Panel
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Menu);

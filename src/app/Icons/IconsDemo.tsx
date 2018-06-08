import * as React from 'react';
import Page from '../Page';
import {IconSkype} from '../../lib';
import {createStyles, FormControl, MenuItem, Select, TextField, Theme, withStyles} from '@material-ui/core';

const styles = (t: Theme) => createStyles({
  config: {
    marginBottom: t.spacing.unit * 4,
    '& > * ': {
      marginRight: t.spacing.unit,
    }
  },

  icons: {
    '& > * ': {
      marginRight: t.spacing.unit * 2,
      marginBottom: t.spacing.unit * 2,
    }
  }
});


const colors = [
  'Black',
  'Red',
  'Blue',
  'Silver',
];

const icons = [
  <IconSkype/>,
  <IconSkype/>,
  <IconSkype/>,
  <IconSkype/>,
];

class IconsDemo extends React.Component<any, any> {

  state = {
    color: colors[0],
    size: 24,
  };

  render() {
    const {classes} = this.props;
    return (
      <Page>
        <div className={classes.config}>
          <TextField
            select
            label="Couleur"
            value={this.state.color}
            onChange={e => this.setState({color: e.target.value})}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            {colors.map(c => <option key={c} value={c}>{c}</option>)}
          </TextField>
          <TextField
            label="Taille"
            type="number"
            value={this.state.size}
            onChange={e => this.setState({size: e.target.value})}
          />
        </div>

        <div className={classes.icons} style={{color: this.state.color}}>
          {icons.map((i, index) =>
            React.cloneElement(i, {key: index, style: {height: this.state.size, width: this.state.size}})
          )}
        </div>
      </Page>
    )
  }
}

export default withStyles(styles)(IconsDemo);

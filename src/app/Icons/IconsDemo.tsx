import * as React from 'react';
import Page from '../Page';
import {IconSkype} from '../../lib';
import {createStyles, FormControl, MenuItem, Select, Theme, withStyles} from '@material-ui/core';

const styles = (t: Theme) => createStyles({
  config: {
    marginBottom: t.spacing.unit * 2,
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

class IconsDemo extends React.Component<any, any> {

  state = {
    color: colors[0],
  };

  render() {
    const {classes} = this.props;
    return (
      <Page>
        <div className={classes.config}>
          <FormControl>
            <Select value={this.state.color} onChange={e => this.setState({color: e.target.value})}>
              {colors.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </Select>
          </FormControl>
        </div>

        <div className={classes.icons} style={{color: this.state.color}}>
          <IconSkype/>
          <IconSkype/>
          <IconSkype/>
          <IconSkype/>
        </div>
      </Page>
    )
  }
}

export default withStyles(styles)(IconsDemo);

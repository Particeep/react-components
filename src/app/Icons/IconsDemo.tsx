import * as React from 'react';
import {FacebookIcon, IconSkype, LinkedinIcon, Page, TwitterIcon} from '../../lib';
import {createStyles, TextField, Theme, withStyles} from '@material-ui/core';
import GitHub from '../../lib/icon/GitHub'
import GitHubIcon from '../../lib/icon/GitHub'

const styles = (t: Theme) => createStyles({
  config: {
    marginBottom: t.spacing.unit * 4,
    '& > * ': {
      marginRight: t.spacing.unit,
    }
  },

  icons: {
    '& > * ': {
      marginRight: t.spacing.unit * 4,
      marginBottom: t.spacing.unit * 4,
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
  <FacebookIcon/>,
  <TwitterIcon/>,
  <LinkedinIcon/>,
  <GitHubIcon/>,
];

class IconsDemo extends React.Component<any, any> {

  state = {
    color: colors[0],
    size: 42,
  };

  render() {
    const {classes} = this.props;
    return (
      <Page>
        <div className={classes.config}>
          <TextField
            select
            label="Color"
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
            label="Size"
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

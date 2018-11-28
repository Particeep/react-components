import * as React from 'react'
import {FacebookIcon, IconSkype, LinkedinIcon, Page, TwitterIcon} from '../../../lib/index'
import {createStyles, FormControl, InputLabel, MenuItem, Select, TextField, Theme, withStyles} from '@material-ui/core'
import GitHubIcon from '../../../lib/icon/GitHubIcon'

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
})


const colors = [
  'Black',
  'Red',
  'Blue',
  'Silver',
]

const icons = [
  <IconSkype/>,
  <FacebookIcon/>,
  <TwitterIcon/>,
  <LinkedinIcon/>,
  <GitHubIcon/>,
]

class IconsDemo extends React.Component<any, any> {

  state = {
    color: colors[0],
    size: 42,
  }

  render() {
    const {classes} = this.props
    return (
      <Page>
        <div className={classes.config}>
          <FormControl>
            <InputLabel>Color</InputLabel>
            <Select
              value={this.state.color}
              onChange={e => this.setState({color: e.target.value})}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              {colors.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </Select>
          </FormControl>
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

export default withStyles(styles)(IconsDemo)

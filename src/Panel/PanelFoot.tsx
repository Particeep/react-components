import * as React from 'react'
import {ReactNode} from 'react'
import {CardActions, Theme, WithStyles, withStyles} from '@material-ui/core'

const styles = (t: Theme) => ({})

interface PanelFootProps extends WithStyles<typeof styles> {
  children?: ReactNode;
  className?: string;
}

class PanelFoot extends React.Component<PanelFootProps, {}> {

  render() {
    const {children, classes, className} = this.props
    return (
      <CardActions className={`${className || ''}`}>
        {children}
      </CardActions>
    )
  }
}


export default withStyles(styles)(PanelFoot)

import * as React from 'react'
import {ReactNode} from 'react'
import {CardActions} from '@material-ui/core'

export interface PanelFootProps {
  children?: ReactNode;
  className?: string;
}

export class PanelFoot extends React.Component<PanelFootProps, {}> {

  render() {
    const {children, className} = this.props
    return (
      <CardActions className={`${className || ''}`}>
        {children}
      </CardActions>
    )
  }
}

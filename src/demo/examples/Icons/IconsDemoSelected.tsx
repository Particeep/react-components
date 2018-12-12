import * as React from 'react'
import {createStyles, Icon, Slide, Theme, WithStyles, withStyles} from '@material-ui/core'
import {Pre} from '../../shared/Pre/Pre'
import {IconBtn} from '../../../lib/IconBtn'

const styles = (t: Theme) => createStyles({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    borderRadius: 4,
    overflow: 'hidden',
  },
  head: {
    background: t.palette.background.default,
    paddingRight: t.spacing.unit * 2,
    paddingLeft: t.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
  },
  pre: {
    borderRadius: '0 !important',
    margin: '0 !important',
  },
  icon: {
    marginLeft: 'auto',
  }
})

interface IProps extends WithStyles<typeof styles> {
  name: string
  color: string
  size: number
  onClear: () => void
}

export const IconsDemoSelected = withStyles(styles)(({name, size, color, onClear, classes}: IProps) => {
  return (
    <Slide direction="down" in={!!name} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <header className={classes.head}>
          {name}
          <IconBtn className={classes.icon} onClick={onClear}>
            <Icon>clear</Icon>
          </IconBtn>
        </header>
        <Pre className={classes.pre} raw={
          `import {${name}} from 'mui-extension'
...
<${name} style={{height: ${size}, width: ${size}, color: '${color}'}}/>
...`
        }/>
      </div>
    </Slide>
  )
})

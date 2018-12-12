import * as React from 'react'
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core'
import {IProgressState, progressbarAnimationDuration, withGlobalProgress} from './GlobalProgressContext'
import classNames from 'classnames'

const progressbarColor = (t: Theme) => t.palette.primary.main

const styles = (t: Theme) => createStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    visibility: 'visible',
    opacity: 1,
    transition: 'all 400ms',
    zIndex: 9999,
  },
  progress: {
    background: progressbarColor(t),
    boxShadow: `0 0 10px ${progressbarColor(t)}, 0 0 5px ${progressbarColor(t)}`,
    height: 2,
    transition: t.transitions.create('all', {duration: progressbarAnimationDuration}),
  },
  progressHide: {
    height: '0px !important',
  },
})

interface IProps extends WithStyles<typeof styles>, IProgressState {
  className?: string
  style?: object
  styleProgress?: object
}

const INITIAL_PERCENT = 10

const GlobalProgressBar = ({currentStep, steps, started, classes, className, style, styleProgress}: IProps) => {

  const getPercent = () => INITIAL_PERCENT + (100 - INITIAL_PERCENT) / steps * currentStep

  return (
    <div className={classes.root} style={style}>
      <div className={classNames(classes.progress, !started && classes.progressHide)}
           style={{...styleProgress, width: getPercent() + '%'}}/>
    </div>
  )
}

export default withStyles(styles)(withGlobalProgress(GlobalProgressBar))

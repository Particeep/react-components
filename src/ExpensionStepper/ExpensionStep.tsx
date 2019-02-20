import * as React from 'react'
import {ReactElement} from 'react'
import {Collapse, createStyles, Icon, Theme, WithStyles, withStyles} from '@material-ui/core'
import {colorSuccess} from '../style/color'
import classNames from 'classnames'

const animationDuration = 300

const styles = (t: Theme) => createStyles({
  root: {
    '&:not(:first-of-type)': {
      borderTop: `1px solid ${t.palette.divider}`,
    }
  },
  header: {
    transition: t.transitions.create('all'),
    padding: `0 ${t.spacing.unit * 3}px`,
    height: 68,
    display: 'flex',
    alignItems: 'center',
    fontSize: t.typography.subheading.fontSize,
  },
  headerCurrent: {
    fontSize: t.typography.title.fontSize,
  },
  headerClickable: {
    cursor: 'pointer',
    '&:hover': {
      background: t.palette.background.default,
    }
  },
  i: {
    fontWeight: t.typography.fontWeightMedium,
    borderRadius: '50%',
    color: colorSuccess,
    marginRight: t.spacing.unit,
  },
  body: {
    transition: t.transitions.create('all'),
    overflow: 'hidden',
  },
  content: {
    padding: `0 ${t.spacing.unit * 3}px ${t.spacing.unit * 3}px ${t.spacing.unit * 3}px`
  }
})

export interface ExpensionStepProps {
  readonly prev?: () => void
  readonly next?: (data?: any) => void
  readonly goTo?: (i: number) => void
  readonly free?: boolean
  readonly index?: number
  readonly disabled?: boolean
  readonly done?: boolean
  readonly isCurrent?: boolean
  readonly isLast?: boolean
  readonly autoScroll?: boolean
}

interface Props extends ExpensionStepProps {
  readonly className?: string
  readonly label: string
  readonly component: ReactElement<any>
}

class ExpensionStep extends React.Component<Props & WithStyles<typeof styles>, {}> {

  private $root: HTMLElement | null = null

  render() {
    const {
      disabled,
      done,
      free,
      isCurrent,
      index,
      label,
      component,
      goTo,
      classes,
      prev,
      next,
      isLast,
      className,
      autoScroll,
      ...other
    } = this.props
    return (
      <div className={classNames(classes.root, className)} ref={node => this.$root = node} {...other}>
        <header
          className={classNames(classes.header, isCurrent && classes.headerCurrent, this.isClickable() && classes.headerClickable)}
          onClick={() => goTo!(index!)}>
          {!free && done && !isCurrent && <Icon className={classes.i}>check</Icon>}
          {!free && <>{index! + 1}. </>}{label}
        </header>
        <Collapse in={isCurrent} timeout={animationDuration} className={classes.body}>
          <div className={classes.content}>
            {React.cloneElement(component, {prev, next, goTo, free, index, disabled, done, isCurrent, isLast})}
          </div>
        </Collapse>
      </div>
    )
  }

  componentDidUpdate(prevProps: any) {
    const {autoScroll, isCurrent} = this.props
    if (autoScroll && !prevProps.isCurrent && isCurrent)
      setTimeout(() => this.scrollTop(), animationDuration)
  }

  private isClickable = () => {
    const {isCurrent, disabled} = this.props
    return !isCurrent && !disabled
  }

  private scrollTop = () => {
    if (this.$root)
      this.$root.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}

export default withStyles(styles)(ExpensionStep) as React.ComponentType<Props>

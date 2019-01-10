import * as React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {createStyles, Theme} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  root: {
    overflow: 'auto',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    color: t.palette.text.primary,
    fontSize: t.typography.body1.fontSize,
    '& $tr': {
      backgroundColor: t.palette.background.paper,
      borderTop: `1px solid ${t.palette.divider}`,
    },
    '& $td': {
      border: `1px solid ${t.palette.divider}`,
      padding: t.spacing.unit * 1.5,
    },
    '& $thead': {
      border: `1px solid ${t.palette.divider}`,
      padding: t.spacing.unit * 1.5,
      fontWeight: t.typography.fontWeightMedium,
    },
    '& $tr:nth-child(2n)': {
      backgroundColor: t.palette.background.default
    }
  },
})

export const DocTable = withStyles(styles)(({classes, children}: any) => {
  return (
    <table className={classes.root}>{children}</table>
  )
})

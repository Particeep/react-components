// @ts-ignore
import * as React from 'react'
import {useState} from 'react'
import {Collapse, createStyles, Icon, IconButton, Theme, withStyles, WithStyles} from '@material-ui/core'
import {Pre} from '../Pre/Pre'

const styles = (t: Theme) => createStyles({
  root: {
    boxShadow: t.shadows[1],
    borderRadius: 4,
    background: t.palette.background.default,
    overflow: 'auto',
    marginTop: t.spacing.unit * 3,
    marginBottom: t.spacing.unit * 3,
  },
  head: {
    margin: `${t.spacing.unit}px ${t.spacing.unit * 2}px ${t.spacing.unit / 2}px ${t.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  wrapper: {
    margin: t.spacing.unit * 2,
    padding: t.spacing.unit * 2,
    background: t.palette.background.paper,
  }
})

interface IProps extends WithStyles<typeof styles> {
  component: any
  raw: string
  reloadable?: boolean
}

const parseComponentCode = (code: string): string => code
  .replace(/\/\/\s*@ts-ignore\s*?\n/, '')

export const Demo = withStyles(styles)(({component: Component, raw, classes, reloadable}: IProps) => {
  const [codeOpened, setCodeOponed] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(true)
  const [containetHeight, setContainetHeight] = useState<number>(undefined)
  const componentContainer = React.createRef()

  const reload = () => {
    if (!containetHeight) {
      setContainetHeight((componentContainer.current as any).offsetHeight - 32)
    }
    setShow(false)
    setTimeout(() => setShow(true))
  }

  return (
    <section className={classes.root}>
      <div className={classes.head}>
        {reloadable &&
        <IconButton disabled={!show} onClick={reload}>
          <Icon>refresh</Icon>
        </IconButton>
        }
        <IconButton color={codeOpened ? 'primary' : undefined} onClick={() => setCodeOponed(!codeOpened)}>
          <Icon>code</Icon>
        </IconButton>
      </div>
      <Collapse in={codeOpened} unmountOnExit>
        <Pre raw={parseComponentCode(raw)} style={{margin: 0, borderRadius: 0}}/>
      </Collapse>
      <div className={classes.wrapper} ref={componentContainer as any} style={{height: containetHeight}}>
        {show && <Component/>}
      </div>
    </section>
  )
})
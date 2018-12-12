import * as React from 'react'
import {useEffect, useState} from 'react'
import {Btn, Page, Panel, PanelBody, PanelFoot, PanelHead} from 'mui-extension'
import {Button, Divider, Icon, IconButton, withStyles} from '@material-ui/core'

let timeout

export const PanelDemoSimple = () => {

  const [isLoading, setIsLoading] = useState(true)

  const load = () => {
    setIsLoading(true)
    timeout = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timeout)
  }

  useEffect(load, [])

  return (
    <Page>
      <Panel loading={isLoading}>
        <PanelHead icon="devices" action={
          <IconButton onClick={load}>
            <Icon>refresh</Icon>
          </IconButton>
        }>
          My devices
        </PanelHead>
        <PanelBody>
          Listen to your music from any computer as well as up to ten devices. Uploading or downloading music using
          Music Manager or Google Play Music for Chrome counts towards your device limit. You can deauthorize four
          devices per year.
        </PanelBody>
        {!isLoading &&
        <>
          <Divider/>
          <PanelBody>
            <Row icon="phone_android" label="samsung SM-G935F" date="August 28, 2018"/>
            <Row icon="phone_android" label="LGE LG-H870DS" date="July 3, 2018"/>
            <Row icon="laptop" label="Computer App" date="June 10, 2018"/>
          </PanelBody>
        </>
        }
        <PanelFoot>
          <Button size="small" color="primary" variant="contained">
            Confirm
          </Button>
          <Button size="small" color="primary" variant="outlined">
            Cancel
          </Button>
        </PanelFoot>
      </Panel>
    </Page>
  )
}

const Row = withStyles((t) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: t.spacing.unit * 2,
    '&:not(:first-of-type)': {
      marginTop: t.spacing.unit * 2,
    },
    '&:not(:last-of-type)': {
      marginBottom: t.spacing.unit * 2,
      borderBottom: `1px solid ${t.palette.divider}`
    }
  },
  icon: {
    color: t.palette.text.secondary
  },
  content: {
    flex: 1,
    marginLeft: t.spacing.unit * 2,
    marginRight: t.spacing.unit * 2,
  },
  label: {
    fontWeight: 'bold'
  },
  desc: {
    fontSize: t.typography.caption.fontSize,
    color: t.typography.caption.color,
  }
}))(({classes, icon, label, date}: any) => {
  return (
    <div className={classes.root}>
      <Icon className={classes.icon}>{icon}</Icon>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.desc}>Last accessed: {date}</div>
      </div>
      <div>
        <Btn color="primary" variant="outlined">Deauthorize</Btn>
      </div>
    </div>
  )
})

import * as React from 'react'
import {useState} from 'react'
import {FacebookIcon, IconSkype, LinkedinIcon, Page, TwitterIcon} from '../../../lib/index'
import {createStyles, MenuItem, TextField, Theme, WithStyles, withStyles} from '@material-ui/core'
import GitHubIcon from '../../../lib/icon/GitHubIcon'
import {fade} from '@material-ui/core/styles/colorManipulator'
import classNames from 'classnames'
import {IconsDemoSelected} from './IconsDemoSelected'
import {PageTitle} from '../../shared/PageHeader/PageTitle'

const styles = (t: Theme) => createStyles({
  head: {
    marginBottom: t.spacing.unit * 3,
    '& > *': {
      marginRight: t.spacing.unit * 2
    }
  },
  icons: {
    color: t.palette.text.primary,
  },
  icon: {
    display: 'inline-block',
    marginRight: t.spacing.unit * 2,
    marginBottom: t.spacing.unit * 2,
    textAlign: 'center',
    transition: t.transitions.create('all'),
    padding: t.spacing.unit * 2 + 'px ' + t.spacing.unit + 'px',
    borderRadius: 4,
    border: '1px solid transparent',
    cursor: 'pointer',
    minWidth: 90,
    '&:hover': {
      border: '1px solid ' + fade(t.palette.primary.main, .35),
      background: fade(t.palette.primary.main, .2)
    },
  },
  iconSelected: {
    border: '1px solid ' + fade(t.palette.primary.main, .9) + ' !important',
    background: fade(t.palette.primary.main, .4) + ' !important',
  },
  label: {
    fontSize: t.typography.caption.fontSize,
    marginTop: t.spacing.unit / 2,
  }
})

const icons = {
  'IconSkype': <IconSkype/>,
  'FacebookIcon': <FacebookIcon/>,
  'TwitterIcon': <TwitterIcon/>,
  'LinkedinIcon': <LinkedinIcon/>,
  'GitHubIcon': <GitHubIcon/>,
}

interface IProps extends WithStyles<typeof styles> {
  theme: Theme
}

const IconsDemo = ({theme, classes}: IProps) => {

  const colors = {
    Text: theme.palette.text.primary,
    Primary: theme.palette.primary.main,
    Secondary: theme.palette.secondary.main,
    Red: 'Red',
    Blue: 'Blue',
    Silver: 'Silver',
  }

  const [color, setColor] = useState<string>('Text')
  const [size, setSize] = useState<number>(42)
  const [selected, setSelected] = useState<string>(undefined)

  return (
    <Page>
      <PageTitle>Icons</PageTitle>
      <p>
        Set of SVG icons not available in Material icons.
      </p>
      <header className={classes.head}>
        <TextField
          select
          label="Color"
          value={color}
          onChange={e => setColor(e.target.value)}
          variant="outlined"
        >
          {Object.keys(colors).map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </TextField>

        <TextField
          variant="outlined"
          label="Size"
          type="number"
          style={{width: 80}}
          value={size}
          inputProps={{min: 1}}
          onChange={e => setSize(+e.target.value)}
        />
      </header>

      <div className={classes.icons} style={{color: colors[color]}}>
        {Object.keys(icons).map((name, index) =>
          <div key={name} className={classNames(classes.icon, selected === name && classes.iconSelected)}
               onClick={() => setSelected(name)}>
            {React.cloneElement(icons[name], {key: index, style: {height: size, width: size}})}
            <div className={classes.label}>{name}</div>
          </div>
        )}
      </div>
      <IconsDemoSelected
        name={selected}
        size={size}
        color={colors[color]}
        onClear={() => setSelected(undefined)}/>
    </Page>
  )
}

export default withStyles(styles, {withTheme: true})(IconsDemo)

import * as React from 'react'
import {ReactElement} from 'react'
import classNames from 'classnames'
import {
  Checkbox,
  createStyles,
  Icon,
  Input,
  InputAdornment,
  Menu,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  menu_head: {
    marginTop: -t.spacing.unit,
    borderBottom: `1px solid ${t.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    minHeight: 48,
  },
  menu_headWithCb: {
    paddingLeft: 0,
  },
  menu_input: {
    background: 'none',
    border: 'none',
    width: '100%',
    height: 30,
    fontSize: '1rem',
    color: t.palette.text.primary,
  },
  menu_items: {
    maxHeight: 300,
    overflowY: 'auto',
    minWidth: 220,
  },
  adornment: {
    height: 20,
    color: t.palette.text.secondary,
    verticalAlign: 'top',
  }
})

interface Props extends WithStyles<typeof styles> {
  multiple?: boolean
  value?: string[] | string
  onChange: (value: string[] | string) => void
  searchLabel?: string
  readonly?: boolean
}

interface State {
  anchorEl: any;
  filter: string;
}

class Autocomplete extends React.Component<Props, State> {

  state: State = {
    anchorEl: null,
    filter: null
  }

  private $input: any

  render() {
    const {value, multiple, searchLabel, readonly, children, classes, onChange, ...other} = this.props
    const {anchorEl} = this.state
    const optionsCount = React.Children.count(children)
    const filteredChildren = this.getFilteredChildren()
    return (
      <>
        <Input {...other} onClick={this.open} value={multiple ? value && (value as string[]).join(', ') : value}
               disabled={readonly}
               inputRef={(n: any) => this.$input = n}
               endAdornment={
                 <InputAdornment position="end">
                   <Icon className={classes.adornment}>arrow_drop_down</Icon>
                 </InputAdornment>
               }
        />
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={this.close}>
          <header className={classNames(classes.menu_head, multiple && classes.menu_headWithCb)}>
            {multiple &&
            <Checkbox
              checked={value.length === optionsCount}
              onChange={this.selectAll}
              indeterminate={value.length > 0 && value.length < optionsCount}
              disabled={readonly}/>
            }
            <input autoFocus className={classes.menu_input} placeholder={searchLabel}
                   style={!multiple ? {marginLeft: 12} : {}}
                   onChange={e => this.setState({filter: e.target.value})}/>
          </header>
          <div className={classes.menu_items} style={{width: this.$input && this.$input.clientWidth}}>
            {filteredChildren.map(x =>
              React.cloneElement(x, {
                ...x.props,
                multiple: multiple,
                checked: value.indexOf(x.props.value) !== -1,
                onClick: this.handleChange,
              })
            )}
          </div>
        </Menu>
      </>
    )
  }

  private open = (event: any) => {
    this.setState({anchorEl: event.currentTarget})
  }

  private close = () => {
    this.setState({anchorEl: null, filter: ''})
  }

  private handleChange = (value: string) => {
    let newValue
    if (this.props.multiple) {
      if (this.props.value.indexOf(value) === -1) newValue = (this.props.value as string[]).concat(value)
      else newValue = (this.props.value as string[]).filter(v => v !== value)
    } else {
      this.close()
      if (this.props.value !== value) newValue = value
      else newValue = ''
    }
    this.props.onChange(newValue)
  }

  private getFilteredChildren(): ReactElement<any>[] {
    const {filter} = this.state
    const items = React.Children.map(this.props.children, (x: React.ReactElement<any>) => x)
    if (filter && filter !== '')
      return items.filter(x => x.props.value.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    return items
  }

  private selectAll = (event: any, checked: boolean) => {
    const values: string[] = checked ? React.Children.map(
      this.props.children,
      (x: React.ReactElement<any>) => x.props.value
    ) : []
    this.props.onChange(values)
  }
}

const mapProps = (Component: any) => (props: any) => <Component
  {...props}
  value={!Array.isArray(props.value) ? [props.value] : props.value}
/>

export default withStyles(styles)(mapProps(Autocomplete))

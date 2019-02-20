import * as React from 'react'
import Mask from './Mask'
import {Input} from '@material-ui/core'
import {InputProps} from '@material-ui/core/Input'

interface Props extends InputProps {
  format: string;
}

class InputDate extends React.Component<Props, {}> {

  render() {
    return (
      <Input {...this.props} inputComponent={this.mask}/>
    )
  }

  private mask = (props) => {
    return <Mask {...props} format={this.props.format}/>
  }
}

export default InputDate

import * as React from 'react';
import {ReactNode} from 'react';
import {Checkbox, MenuItem, Radio} from '@material-ui/core';

export interface AutocompleteItemProps {
  multiple?: boolean
  disabled?: boolean;
  checked?: boolean;
  value: string;
  children?: ReactNode;
  onClick?: (value: string) => void
}

class PickItem extends React.Component<AutocompleteItemProps, {}> {

  render() {
    const {checked, disabled, multiple, value, children, onClick} = this.props;
    return (
      <MenuItem onClick={() => onClick(value)} style={{paddingLeft: 0}} disabled={disabled}>
        {multiple
          ? <Checkbox disabled={disabled} checked={checked}/>
          : <Radio disabled={disabled} checked={checked}/>
        }
        {children}
      </MenuItem>
    );
  }
}

export default PickItem;

import * as React from 'react'
import MaskedInput from 'react-text-mask'

interface Props {
  readonly format: string;
}

const getDateFormatSeparator = (dateFormat: string): string => {
  if (dateFormat.indexOf('/') >= 0) return '/'
  if (dateFormat.indexOf('-') >= 0) return '-'
  if (dateFormat.indexOf('.') >= 0) return '.'
  return '/'
}

class Mask extends React.Component<any, {}> {

  public static defaultProps: Partial<Props> = {
    format: 'dd/mm/yyyy'
  }

  render() {
    const {format, inputRef, ...other} = this.props
    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        mask={this.buildMask(format)}
        placeholder={format}
      />
    )
  }

  private buildMask(format: string): any[] {
    const delimiter = getDateFormatSeparator(format)
    const yearRegex = [/[1-2]/, /\d/, /\d/, /\d/]
    const monthRegex = [/[0-1]/, /\d/]
    const dayRegex = [/[0-3]/, /\d/]

    let mask = format.split(new RegExp(`(\\${delimiter})`, 'g'))
    mask = this.replace(mask, 'yyyy', yearRegex)
    mask = this.replace(mask, 'mm', monthRegex)
    mask = this.replace(mask, 'dd', dayRegex)
    return mask
  }

  private replace(array: string[], string: string, replacement: any[]) {
    const i = array.indexOf(string)
    if (i != null) array.splice(i, 1, ...replacement)
    return array
  }
}

export default Mask

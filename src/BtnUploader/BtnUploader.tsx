import * as React from 'react'
import {Avatar, Chip, CircularProgress, createStyles, Icon, Theme, WithStyles, withStyles} from '@material-ui/core'
import {Btn} from '../Btn/index'
import {colorError} from '../style/color'
import classNames from 'classnames'
import {ButtonProps} from '@material-ui/core/Button'

const styles = (t: Theme) => createStyles({
  root: {
    minHeight: 40,
    display: 'flex',
    alignItems: 'center',
  },
  doc: {},
  doc_i: {
    color: t.palette.text.secondary,
    fontSize: t.typography.subheading.fontSize,
  },
  doc_progress: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  docUploading: {
    color: t.palette.text.disabled,
  },
  error: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: t.spacing.unit,
    color: colorError,
    padding: `${t.spacing.unit} ${t.spacing.unit * 2}`,
    borderRadius: 2,


  },
  error_i: {
    marginRight: t.spacing.unit
  },

  error_reset: {
    marginLeft: t.spacing.unit,
    cursor: 'pointer',
  }
})

interface Document {
  permalink: string
  name: string
}

interface Messages {
  loading: string
  upload: string
  invalidSize: string
}

interface Props extends WithStyles<typeof styles>, Pick<ButtonProps, Exclude<keyof ButtonProps, keyof { classes }>> {
  document?: Document
  msg?: Messages
  uploading?: boolean
  maxUploadFileSize?: number
  onDelete: () => void
  onUpload: (f: File) => void
}

// TODO(Alex) Fix wierd typing issue (it works for <Btn>)
class BtnUploader extends React.Component<Props, any> {

  public static defaultProps: Partial<Props> = {
    msg: {
      loading: 'Loading...',
      upload: 'Upload',
      invalidSize: 'File is too big',
    },
  }

  state = {
    errorMessage: null
  }

  private fileInput: any

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        {this.renderBody()}
        {this.state.errorMessage &&
        <div className={classes.error}>
          <Icon className={classes.error_i}>warning</Icon>
          {this.state.errorMessage}
          <Icon className={classes.error_reset}
                onClick={() => this.setState({errorMessage: ''})}>clear</Icon>
        </div>
        }
      </div>
    )
  }

  renderBody() {
    const {document, uploading, classes, msg, onUpload, onDelete, ...other} = this.props
    if (uploading) {
      return (
        <Chip className={classNames(classes.doc, classes.docUploading)} label={msg.loading} avatar={
          <Avatar>
            <CircularProgress size={32} className={classes.doc_progress}/>
            <Icon className={classes.doc_i}>insert_drive_file</Icon>
          </Avatar>
        }/>
      )
    } else {
      if (document) {
        return (
          <Chip
            className={classes.doc} label={document.name}
            onDelete={this.clear} onClick={() => window.open(document.permalink, '_blank')}
            avatar={
              <Avatar>
                <Icon className={classes.doc_i}>insert_drive_file</Icon>
              </Avatar>
            }
          />
        )
      } else {
        return (
          <Btn color="primary" onClick={this.openFileSelection} icon="file_upload" {...other}>
            {msg.upload}
            <input style={{display: 'none'}} type="file" ref={file => this.fileInput = file}
                   onChange={e => this.handleChange(e.target.files[0])}/>
          </Btn>
        )
      }
    }
  }

  private openFileSelection = () => {
    this.fileInput.click()
  }

  private handleChange = (file) => {
    const {maxUploadFileSize, onUpload, msg} = this.props
    if (maxUploadFileSize && file.size > maxUploadFileSize * 1024 * 1024) {
      this.setState({errorMessage: msg.invalidSize})
      return
    }
    onUpload(file)
  }

  private clear = () => {
    this.props.onDelete()
  }
}

export default withStyles(styles)(BtnUploader) as React.ComponentType<Props>

import * as React from 'react'
import prism from '../../core/prism'

interface IProps {
  raw: string
  style?: object
}

export const Pre = ({raw, style}: IProps) => {
  return (
    <pre className="language-javascript" style={{margin: '1em 0', fontSize: 13, borderRadius: 4, ...style}}>
      <code style={{padding: 0}} className="markdown-body"
            dangerouslySetInnerHTML={{__html: prism.highlight(raw, prism.languages.javascript, 'typescript')}}
      />
    </pre>
  )
}

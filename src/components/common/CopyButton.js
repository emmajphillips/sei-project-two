import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyButton = (copy) => {
  // console.log(copy.copy)
  return (
    <CopyToClipboard text={copy.copy}>
      <button type="button" className="button gif-button">
        <span className="icon">
          <i className="far fa-copy"></i>
        </span>
        <span>Copy to clipboard</span></button>
    </CopyToClipboard>
  )
}

export default CopyButton
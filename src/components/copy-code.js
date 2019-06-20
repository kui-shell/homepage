import React from "react"
import copy from "copy-to-clipboard"
import addCountlyEvent from "../events"

const CopyCode = ({ title, command }) => {
  const [copiedData, setCopiedData] = React.useState(false)

  const setSuccessMessage = () => {
    setCopiedData(true)
    setTimeout(() => setCopiedData(false), 2500)
  }

  const handleClick = e => {
    copy(command)
    setSuccessMessage()

    addCountlyEvent({
      key: `copy-code`,
      count: 1,
      segmentation: {
        item: title,
      },
    })
  }

  return (
    <div className="kui-codepaste" onClick={handleClick}>
      <h3 className="ibm-type-a">{title}</h3>
      <button className="kui-codecopy">
        <span className="ibm-type-b ibm-type-mono kui-codecopy-content">
          {copiedData ? "Copied" : command}
        </span>
        <img src={"ui/copy.svg"} alt="Copy" />
      </button>
    </div>
  )
}

export default CopyCode

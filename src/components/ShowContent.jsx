import React from 'react'
import parse from "html-react-parser"
const ShowContent = ({Content}) => {
  return (
    <div >
        {parse(Content)}
    </div>
  )
}

export default ShowContent
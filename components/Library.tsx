import React from 'react'

const Library = () => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2"></div>
      </div>
    </div>
  )
}

export default Library;
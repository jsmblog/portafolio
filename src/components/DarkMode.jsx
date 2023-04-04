import React from 'react'

const DarkMode = ({darkMode , handleClickdarkMode}) => {
  return (
    <div>
        <img onClick={handleClickdarkMode}  className='btnDarkMode positionFixedDarkMode vibrate-1' width={60} src={darkMode} alt="" />
    </div>
  )
}

export default DarkMode
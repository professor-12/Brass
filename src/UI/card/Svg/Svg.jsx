import React from 'react'

const Svg = ({onclick,style,w,h}) => {
  return (
        <svg width={w} onClick={onclick} height={h} className={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15.5" stroke="#E9EBEC"></circle><path d="M11.286 16h9.429M16.857 12.144 20.715 16l-3.858 3.857" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  )
}

export default Svg
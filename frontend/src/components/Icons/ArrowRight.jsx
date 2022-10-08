import React from "react"

const ArrowRight = ({ setColor, setWidth, setHeight,className, ...orthers }) => {
  return (
    <svg
      className={className}
      width={setWidth}
      height={setHeight}
      {...orthers}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
            fillRule="evenodd"
            clipRule="evenodd"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
              fill={ setColor }
            />
      </svg>
  )
}


export default ArrowRight

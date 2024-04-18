import React from "react"

type ButtonPropsType= {
    children:React.ReactNode;
    iconUrl?:string;
    classnames?:string;
}

function Button({children, iconUrl,classnames}:ButtonPropsType) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${!classnames && " bg-gray-500 text-white"} ${classnames} rounded-full  border-gray-500 hover:bg-gray-900`}>
        {children}
        <img src={iconUrl} alt="arrow right icon" className={`${!iconUrl && "hidden"} ml-2 rounded-full w-5 h-5`} />
    </button>
  )
}

export default Button
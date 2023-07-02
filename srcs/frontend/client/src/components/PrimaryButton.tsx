import React from 'react'


interface Props {
  value:any  
};

const PrimaryButton: React.FC<Props> = (props) => {

    return (
        <button className='h-10 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md text-md text-white'>{props.value}</button>
    )
}


export default PrimaryButton


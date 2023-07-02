import React from 'react'
import {faGripVertical} from '@fortawesome/free-solid-svg-icons'

import "../../styles/index.css"
import PopUpButton from '../PopUpButton'
interface Props {

}

const Nav:React.FC<Props> = ()=>{
    return <div className='flex flex-row justify-center items-center'>
        <h3 className='text-2xl px-4 m-3.5'>DevChallenges Board</h3>
        <div className="w-px h-10 bg-gray-300 m-3.5"></div>
        <PopUpButton icon={faGripVertical} value={"All board"}/>
      </div>
}

export default Nav
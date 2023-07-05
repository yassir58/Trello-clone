import React from 'react'
import PrimaryButton from './PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { CardWrapper } from './Card'
import { HeaderWrapper } from './header/header'
import SmallLogo from './header/SmallLogo'
import { Link } from 'react-router-dom'
import SearchForm from './header/SearchForm'
import ProfileHeader from './header/ProfileHeader'
import CardImage from './CardImage'



interface Props {}


const AllBoards: React.FC<Props> = () => {

    return (
        <div className=''>
            <HeaderWrapper>
               <Link to='/'>
               <SmallLogo/>
               </Link>
                <div className="flex justify-around items-center">
                    <SearchForm/>
                     <ProfileHeader/>
                </div>
            </HeaderWrapper>
            <div className='flex w-10/12 justify-between items-center mx-auto px-1 my-16 px-2'>
                <h1 className='text-xl font-black'>All Boards</h1>
                <PrimaryButton size='' isPrimary={true}>
                    <FontAwesomeIcon icon={faPlus} />
                    <small className='ml-2'>Add </small>
                </PrimaryButton>
            </div>

            <div className='w-10/12 mx-auto my-6 flex justify-start flex-wrap'>
                <CardWrapper>
                    <CardImage src="https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"/>
                    <h3 className='text-left text-lg p-2 font-bold'>this is a card title</h3>
                </CardWrapper>
            </div>
        </div>
    )
}

export default AllBoards
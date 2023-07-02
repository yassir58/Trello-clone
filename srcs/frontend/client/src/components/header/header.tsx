import React from "react";
import Nav from "./nav";
import SmallLogo from "./SmallLogo";
import SearchForm from "./SearchForm";
import ProfileHeader from "./ProfileHeader";
import "../../styles/app.scss";
interface Props {}


const Header:React.FC<Props> = ()=>{
 
    return (
        <div>
            <header className="flex justify-between items-center px-5 py-3 header">
               <div className="flex justify-around items-center">
                    <SmallLogo/>
                    <Nav/>
               </div>
                <div className="flex justify-around items-center">
                    <SearchForm/>
                     <ProfileHeader/>
                </div>
            </header>
        </div>
            
    )
}

export default Header
import React, {useState} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import {useNavigate} from "react-router-dom";
import {auth} from "../dbConnection";
import {signOut} from 'firebase/auth';
import UserProfileItem from "./profile/UserProfileItem";
import EditUserProfile from "./profile/EditUserProfile";


const style= {
    width: '50px'
}
function PersonDropDown({direction, authUser, ...args}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const nav = useNavigate();

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    function authButtonHandler() {
        if (authUser.email) {
            signOut(auth).then(() => {
                console.log('sign out successful');
                nav('/');
            }).catch(err => console.log(err));
        } else {
            nav('/login');
        }
    }

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
                <DropdownToggle caret color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-4"
                         style={style} alt="Avatar"/>
                </DropdownToggle>
                <DropdownMenu {...args} end={true}>
                    {authUser.email && <>
                        <DropdownItem header>{authUser.email}</DropdownItem>
                        <DropdownItem><UserProfileItem/></DropdownItem>
                        <DropdownItem divider/>
                    </>}
                    <DropdownItem onClick={authButtonHandler}>{authUser.email ? 'Sign out' : 'Log in'}</DropdownItem>
                </DropdownMenu>
                <EditUserProfile/>
            </Dropdown>
        </>
    );
}


export default PersonDropDown;

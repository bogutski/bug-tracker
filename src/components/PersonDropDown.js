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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-person"
                         viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                </DropdownToggle>
                <DropdownMenu {...args} end={true}>
                    {authUser.email && <>
                        <DropdownItem header>{authUser.email}</DropdownItem>
                        <DropdownItem>Profile</DropdownItem>
                        <DropdownItem divider/>
                    </>}
                    <DropdownItem onClick={authButtonHandler}>{authUser.email ? 'Sign out' : 'Log in'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}


export default PersonDropDown;

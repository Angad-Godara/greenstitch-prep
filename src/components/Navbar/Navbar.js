import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar__wrapper'>
            <div className='search__wrapper'>
                <svg className='search__icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.13803 8.50993C4.13803 6.14304 6.05677 4.2243 8.42366 4.2243C10.7905 4.2243 12.7093 6.14304 12.7093 8.50993C12.7093 10.8768 10.7905 12.7956 8.42366 12.7956C6.05677 12.7956 4.13803 10.8768 4.13803 8.50993ZM8.42366 2.9743C5.36642 2.9743 2.88803 5.45269 2.88803 8.50993C2.88803 11.5672 5.36642 14.0456 8.42366 14.0456C9.7271 14.0456 10.9253 13.5951 11.8711 12.8413L15.6982 16.6683C15.9422 16.9124 16.338 16.9124 16.5821 16.6683C16.8261 16.4242 16.8261 16.0285 16.5821 15.7844L12.755 11.9574C13.5088 11.0116 13.9593 9.81337 13.9593 8.50993C13.9593 5.45269 11.4809 2.9743 8.42366 2.9743Z" fill="#282828" />
                </svg>
                <input className='search__input' type='text' placeholder='Search...' />
            </div>
            <div className='nav__options'>
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99881 19V20C8.99881 20.7956 9.31488 21.5587 9.87749 22.1213C10.4401 22.6839 11.2032 23 11.9988 23C12.7945 23 13.5575 22.6839 14.1201 22.1213C14.6827 21.5587 14.9988 20.7956 14.9988 20V19M9.99881 7C9.99881 6.46957 10.2095 5.96086 10.5846 5.58579C10.9597 5.21071 11.4684 5 11.9988 5C12.5292 5 13.0379 5.21071 13.413 5.58579C13.7881 5.96086 13.9988 6.46957 13.9988 7C15.1472 7.54303 16.1262 8.38833 16.8309 9.4453C17.5355 10.5023 17.9392 11.7311 17.9988 13V16C18.0741 16.6217 18.2942 17.2171 18.6416 17.7381C18.989 18.2592 19.4539 18.6914 19.9988 19H3.99881C4.54375 18.6914 5.00862 18.2592 5.356 17.7381C5.70337 17.2171 5.92355 16.6217 5.99881 16V13C6.05837 11.7311 6.46211 10.5023 7.16676 9.4453C7.87141 8.38833 8.8504 7.54303 9.99881 7Z" stroke="#5F6980" stroke-width="1.38462" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="19.7148" y="0.286133" width="6.85714" height="6.85714" rx="3.42857" fill="#E25563" />
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2822 3C16.2822 2.58579 15.9464 2.25 15.5322 2.25C15.118 2.25 14.7822 2.58579 14.7822 3V4.25H8.28223V3C8.28223 2.58579 7.94644 2.25 7.53223 2.25C7.11801 2.25 6.78223 2.58579 6.78223 3V4.25H5.53223C4.01344 4.25 2.78223 5.48122 2.78223 7V11V19C2.78223 20.5188 4.01344 21.75 5.53223 21.75H17.5322C19.051 21.75 20.2822 20.5188 20.2822 19V11V7C20.2822 5.48122 19.051 4.25 17.5322 4.25H16.2822V3ZM18.7822 10.25V7C18.7822 6.30964 18.2226 5.75 17.5322 5.75H16.2822V7C16.2822 7.41421 15.9464 7.75 15.5322 7.75C15.118 7.75 14.7822 7.41421 14.7822 7V5.75H8.28223V7C8.28223 7.41421 7.94644 7.75 7.53223 7.75C7.11801 7.75 6.78223 7.41421 6.78223 7V5.75H5.53223C4.84187 5.75 4.28223 6.30964 4.28223 7V10.25H18.7822ZM4.28223 11.75H18.7822V19C18.7822 19.6904 18.2226 20.25 17.5322 20.25H5.53223C4.84187 20.25 4.28223 19.6904 4.28223 19V11.75Z" fill="#5F6980" />
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.02246 4.948C5.02246 4.80993 5.13439 4.698 5.27246 4.698H9.27246C9.41053 4.698 9.52246 4.80993 9.52246 4.948V8.948C9.52246 9.08607 9.41053 9.198 9.27246 9.198H5.27246C5.13439 9.198 5.02246 9.08607 5.02246 8.948V4.948ZM5.27246 3.198C4.30596 3.198 3.52246 3.9815 3.52246 4.948V8.948C3.52246 9.9145 4.30596 10.698 5.27246 10.698H9.27246C10.239 10.698 11.0225 9.9145 11.0225 8.948V4.948C11.0225 3.9815 10.239 3.198 9.27246 3.198H5.27246ZM15.0225 4.948C15.0225 4.80993 15.1344 4.698 15.2725 4.698H19.2725C19.4105 4.698 19.5225 4.80993 19.5225 4.948V8.948C19.5225 9.08607 19.4105 9.198 19.2725 9.198H15.2725C15.1344 9.198 15.0225 9.08607 15.0225 8.948V4.948ZM15.2725 3.198C14.306 3.198 13.5225 3.9815 13.5225 4.948V8.948C13.5225 9.9145 14.306 10.698 15.2725 10.698H19.2725C20.239 10.698 21.0225 9.9145 21.0225 8.948V4.948C21.0225 3.9815 20.239 3.198 19.2725 3.198H15.2725ZM5.27246 14.698C5.13439 14.698 5.02246 14.8099 5.02246 14.948V18.948C5.02246 19.0861 5.13439 19.198 5.27246 19.198H9.27246C9.41053 19.198 9.52246 19.0861 9.52246 18.948V14.948C9.52246 14.8099 9.41053 14.698 9.27246 14.698H5.27246ZM3.52246 14.948C3.52246 13.9815 4.30596 13.198 5.27246 13.198H9.27246C10.239 13.198 11.0225 13.9815 11.0225 14.948V18.948C11.0225 19.9145 10.239 20.698 9.27246 20.698H5.27246C4.30596 20.698 3.52246 19.9145 3.52246 18.948V14.948ZM15.0225 14.948C15.0225 14.8099 15.1344 14.698 15.2725 14.698H19.2725C19.4105 14.698 19.5225 14.8099 19.5225 14.948V18.948C19.5225 19.0861 19.4105 19.198 19.2725 19.198H15.2725C15.1344 19.198 15.0225 19.0861 15.0225 18.948V14.948ZM15.2725 13.198C14.306 13.198 13.5225 13.9815 13.5225 14.948V18.948C13.5225 19.9145 14.306 20.698 15.2725 20.698H19.2725C20.239 20.698 21.0225 19.9145 21.0225 18.948V14.948C21.0225 13.9815 20.239 13.198 19.2725 13.198H15.2725Z" fill="#5F6980" />
                </svg>
            </div>
            <div className='nav__user'>
                <img src='assets/user.jpg' />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.33333" y="1.33333" width="9.33333" height="9.33333" rx="4.66667" fill="#20C997" />
                    <rect x="1.33333" y="1.33333" width="9.33333" height="9.33333" rx="4.66667" stroke="white" stroke-width="1.33333" />
                </svg>
            </div>
        </nav>
    )
}

export default Navbar
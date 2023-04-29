import React from 'react'
import './Sidebar.css'

function Dashboard() {
    return (
        <div className='dashboard'>
            <h6 className='sidebar__title'>Dashboard</h6>
            <ul className='sidebar__options'>
                <li className='sidebar__option__open sidebar__option__select'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1033 9.27667C13.9603 8.46508 13.5798 7.71415 13.0099 7.11882C12.4401 6.52349 11.7065 6.1105 10.902 5.93209C10.0974 5.75368 9.25804 5.81786 8.48996 6.1165C7.72188 6.41515 7.05961 6.93485 6.5869 7.60989C6.11419 8.28492 5.85226 9.08498 5.83425 9.90887C5.81624 10.7328 6.04295 11.5435 6.48571 12.2386C6.92847 12.9336 7.56739 13.4818 8.32168 13.8137C9.07597 14.1456 9.91175 14.2464 10.7233 14.1033M2.5 10C2.5 11.4834 2.93987 12.9334 3.76398 14.1668C4.58809 15.4001 5.75943 16.3614 7.12987 16.9291C8.50032 17.4968 10.0083 17.6453 11.4632 17.3559C12.918 17.0665 14.2544 16.3522 15.3033 15.3033C16.3522 14.2544 17.0665 12.918 17.3559 11.4632C17.6453 10.0083 17.4968 8.50032 16.9291 7.12987C16.3614 5.75943 15.4001 4.58809 14.1668 3.76398C12.9334 2.93987 11.4834 2.5 10 2.5M9.16667 10C9.16667 10.221 9.25446 10.433 9.41074 10.5893C9.56702 10.7455 9.77899 10.8333 10 10.8333C10.221 10.8333 10.433 10.7455 10.5893 10.5893C10.7455 10.433 10.8333 10.221 10.8333 10C10.8333 9.77899 10.7455 9.56702 10.5893 9.41074C10.433 9.25446 10.221 9.16667 10 9.16667C9.77899 9.16667 9.56702 9.25446 9.41074 9.41074C9.25446 9.56702 9.16667 9.77899 9.16667 10Z" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Dashboard</span>
                    <svg className='sidebar__arrow' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.09766 6.5L6.09766 1.5L11.0977 6.5" stroke="#282828" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </li>
                <li className='sidebar__option__open'>Record</li>
                <li>Projects</li>
                <li>Analyse</li>
                <li>Learn</li>
            </ul>
        </div>
    )
}

export default Dashboard
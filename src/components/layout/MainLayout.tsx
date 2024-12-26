import React from 'react'
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router';

export const MainLayout: React.FC = () => {
    return (

        <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Sidebar />
            <div style={{ width: '87.5%' }}>
                <Outlet />
            </div>
        </div>

    )
}

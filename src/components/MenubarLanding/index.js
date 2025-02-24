import React from 'react';
import './index.scss';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo2.png';

export default function MenubarLanding() {
    const navigate = useNavigate();

    // Define menu items for navigation
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => navigate('/')
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            command: () => navigate('/')
        },
        {
            label: 'Programs',
            icon: 'pi pi-fw pi-book',
            command: () => navigate('/')
        },
        {
            label: 'Reports DIAN',
            icon: 'pi pi-fw pi-list-check',
            items: [
                {
                    label: 'Report DIAN 2017',
                    icon: 'pi pi-fw pi-file',
                },
                {
                    label: 'Report DIAN 2018',
                    icon: 'pi pi-fw pi-file',
                },
                {
                    label: 'Report DIAN 2019',
                    icon: 'pi pi-fw pi-file',
                },
                {
                    label: 'Report DIAN 2019',
                    icon: 'pi pi-fw pi-file',
                },
                {
                    label: 'Report DIAN 2020',
                    icon: 'pi pi-fw pi-file',
                },
                {
                    label: 'Report DIAN 2021',
                    icon: 'pi pi-fw pi-file',
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            command: () => navigate('/')
        }
    ];

    // Logo component displayed at the end of the menu bar
    const end = <img alt="logo" src={logo} height="70" className="mr-2"></img>;

    return (
        <div className='menubar-height'>
            <div className='menubar-landing'>
                {/* Renders the menu bar with defined items and logo */}
                <Menubar className="border-radius-0" model={items} end={end} />
            </div>
        </div>
    );
}

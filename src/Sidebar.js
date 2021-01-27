import React from 'react';
import './Sidebar.css';
import { Button } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import LabelImportantIcon  from '@material-ui/icons/LabelImportant';
import NearMeIcon  from '@material-ui/icons/NearMe';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NoteIcon  from '@material-ui/icons/Note';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return <div className='sidebar'> 
            <Button 
                    className='sidebar__compose' 
                    startIcon={<AddIcon fontSize='large'/>}>
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} 
                            title='Inbox'
                            number={54} 
                            selected={true}/>

            <SidebarOption Icon={StarIcon} 
                            title='Starred'
                            number={20} />

            <SidebarOption Icon={AccessTimeIcon} 
                            title='snoozed'
                            number={20} />

            <SidebarOption Icon={LabelImportantIcon} 
                            title='Important'
                            number={20} />

            <SidebarOption Icon={NearMeIcon} 
                            title='Sent'
                            number={10} />    

            <SidebarOption Icon={NoteIcon} 
                            title='Drafts'
                            number={40} />     

            <SidebarOption Icon={ExpandMoreIcon} 
                            title='More'
                            number={10} />       

        </div>
    
}

export default Sidebar

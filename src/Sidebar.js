import React from 'react';
import './Sidebar.css';
import { IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
// import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import LabelImportantIcon  from '@material-ui/icons/LabelImportant';
import NearMeIcon  from '@material-ui/icons/NearMe';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NoteIcon  from '@material-ui/icons/Note';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore';

import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import PersonIcon from '@material-ui/icons/Person';

function Sidebar() {
    return (
    <div className='sidebar'> 
            <div className='sidebar__compose'>
                Compose
            </div>

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


               <div className="sidebar__footer">
                    <div className="sidebar__footerIcons">
                        <IconButton>
                            <PersonIcon />
                        </IconButton>

                        <IconButton>
                            <DuoIcon />
                        </IconButton>

                        <IconButton>
                            <PhoneIcon />
                        </IconButton>
                    </div>
               </div> 

        </div>
    );
}

export default Sidebar

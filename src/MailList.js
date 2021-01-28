import React from 'react';
import './MailList.css';

// import material-ui
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

// import components
import Section from './Section';
import EmailRow from './EmailRow';

function MailList() {
    return (
        <div className='mailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList__settingsRight">
                <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} 
                         title='Primary'
                         color='red'
                         selected />

                <Section Icon={PeopleIcon} 
                         title='Social'
                         color='#1A73E8'
                             />    

                <Section Icon={LocalOfferIcon} 
                         title='Promotions'
                         color='green'
                             />
            </div>

            <div className="emailList__list">
                <EmailRow 
                    title='Twich'
                    subject='Treat as urgent!!!'
                    description='This is a test message'
                    time='10:00pm'
                    />

                <EmailRow 
                    title='Tizi Cerutti'
                    subject='Status Update Please!!'
                    description='This is a test message 
                    This is a test message
                    This is a test message
                    This is a test message'
                    time='11:00pm'
                    />

<EmailRow 
                    title=' Babatoonday Mattieu'
                    subject='Unit test like a Pro!'
                    description='This is a test message 
                    This is a test message
                    This is a test message
                    This is a test message'
                    time='11:00pm'
                    />


<EmailRow 
                    title='Tizi Cerutti'
                    subject='Senior Java Developer at Rise Technical Recruitment and 9 more jobs in Germany for you. Apply Now.'
                    description='This is a test message 
                    This is a test message
                    This is a test message
                    This is a test message'
                    time='11:00pm'
                    />

<EmailRow 
                    title='Ben Lesh'
                    subject='RXJS operators for high performance app!!'
                    description='This is a test message 
                    This is a test message
                    This is a test message
                    This is a test message'
                    time='11:00pm'
                    />
            </div>
        </div>
    )
}

export default MailList

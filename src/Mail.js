import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// router 
import { useHistory } from 'react-router-dom';


import { IconButton } from '@material-ui/core';

function Mail() {

    const history = useHistory();

    return <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>

                <div className="mail__toolsRight">

                </div>
            </div>
            <h2>Hey whats up! Im your Mail!</h2>
        </div>

}

export default Mail;

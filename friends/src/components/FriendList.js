import React from 'react';
import Friend from './Friend';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const FriendList = props => {
    return(
        <div className="friend-list">
            {props.friendList.map( friend => <Friend key={friend.name} friend={friend}/>)}
            <Link to="/add" style={{'color': 'white', 'textDecoration': 'none'}}><Button color="primary">Add Friend</Button></Link>
        </div>
    )
}

export default FriendList;
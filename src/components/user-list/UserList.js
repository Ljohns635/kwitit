import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { userlist } from "../../redux/actions";

 export default function UserList() {
   const dispatch = useDispatch()
   useEffect(() => {
     dispatch(userlist()) 
     
   }, [])
     const userListState = useSelector((state) => ({
          userList: state.users.userList,      
         
     }));
     console.log(userListState)
     return (
     <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            
          {userListState.userList && userListState.userList.map(user =><ListGroup.Item as="li" action>
            {user.username}<br/>
            {console.log(user)}
            created at:{user.createdAt}
            </ListGroup.Item>)}
          </ListGroup.Item>
            
        
    
    </ListGroup>
  );
}
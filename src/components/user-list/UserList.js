 import React, { useState, useEffect } from 'react';
 import ListGroup from 'react-bootstrap/ListGroup';
 import { useSelector, useDispatch } from 'react-redux'
 import {userlist} from "../../redux/actions"

 export default function UserList() {
     const userList = useSelector((state) => {
         return state.userlist         
         
     });
     const dispatch = useDispatch()
     useEffect(() => {
       dispatch(userlist()) 
     }, [])

     return (
     <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            
          {userList && userList.map(user =><ListGroup.Item as="li" action>
            {user.username}
            </ListGroup.Item>)}
          </ListGroup.Item>
            
        
    
    </ListGroup>
          
     )

    }
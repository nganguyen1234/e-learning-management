import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import { Outlet } from 'react-router-dom'
import TeacherFooter from './TeacherFooter'
import { useUser } from "../../userProvider/UserProvider";

export default function TeacherLayout() {
    const user = useUser();
    const monitoredClass = user.monitoredClass;
  return (
    <div>
        <TeacherNavbar monitoredClassId={monitoredClass.id}/>
        <Outlet/>
        <TeacherFooter/>
    </div>
  )
}

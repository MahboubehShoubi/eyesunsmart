import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import connectDB from '@/utils/connectDB';
import User from '@/models/User';

async function Userlayout() {
    const session = await getServerSession(authOptions);
    if(!session) redirect("/");
  
    await connectDB();
    const user = await User.findOne({email : session.user.email});
    if(user.role !== "USER") redirect("/");
  
    return (
      <>
      <HeaderSubPage/>
      <Dashboardsidebar email={user.email} role={user.role}>{children}</Dashboardsidebar>
      <Footer />
      </>
  )
}

export default Userlayout;

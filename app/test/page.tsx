import AppBar from '@/components/NextAuthTest/AppBar'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import App from 'next/app';


const page = async () => {
  const session = await getServerSession(authOptions);
  return (
 <div>
  <AppBar/>
  <div className='h-5 w-20 bg-white text-black'>  {session?.user.email}
</div>
 </div>
  );
};

export default page;
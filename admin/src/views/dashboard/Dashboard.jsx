// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../../components/dashboard/SideBar';
import Home from '../screens/Home';
import Vendors from '../screens/Vendors';
import Header from '../../components/dashboard/Header';
import Footer from '../../components/dashboard/Footer';

function Dashboard() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className=" w-full">
        <div className=''>
          <header className='mb-32'>
            <Header />
          </header>
          <Routes>
            {/* Define routes within the dashboard */}
            <Route path="/" element={<Home />} />
            <Route path="/vendors" element={<Vendors />} />
          </Routes>

      <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import Revenue from "../component/core/Home/Revenue";
import Sales from "../component/core/Home/Sales";
import { Link } from 'react-router-dom';
import Customer from "../component/core/Home/Customer";
import Reports from "../component/core/Home/Reports";
import RecentSales from "../component/core/Home/RecentSales";
import TopSelling from "../component/core/Home/TopSelling";
import RecentActivity from "../component/core/Home/RecentActivity";
import BudgetReport from "../component/core/Home/BudgetReport";
import WebsiteTraffic from "../component/core/Home/WebsiteTraffic";
import NewsUpdates from "../component/core/Home/NewsUpdates";


const Home = () => {
    return (
    <>    
    <main id="main" className="main">
    <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
      <div className="row">
                
        <div className="col-lg-8">
          <div className="row">            
            <Sales />            
            <Revenue />
            <Customer />
            <Reports />            
            <RecentSales />
            <TopSelling />
          </div>
        </div>

        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebsiteTraffic />        
          <NewsUpdates />
        </div>

      </div>
    </section>
  </main>    
    </>
    );
}

export default Home;
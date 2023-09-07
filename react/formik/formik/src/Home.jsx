import React, { useContext } from 'react';
import { Namecontext } from './Context';
import './home.css';
import d1 from './images/d1.png';

const Home = () => {
  const { Author, Name } = useContext(Namecontext);
  return (
    <div className="admin-dashboard">
      <main className="content">
        <div className="count">
          <div className="card">
            <h2>Total No. of Authors</h2>
            <h3>{Author.length}</h3>
          </div>
          <div className="card">
            <h2>Total No. of Books</h2>
            <h3>{Name.length}</h3>
          </div>
          <div className="card">
            <h2>Total No. of Books Bought</h2>
            <h3>13</h3>
          </div>
        </div>

      <div className="graphs">
            <img
              src={'https://o.remove.bg/downloads/21948c54-cd7d-456c-a671-74f5098db721/illustration-data-analysis-graph_53876-17893-removebg-preview.png'}
              alt="Image Description"
              className="responsive-image"
            
            />
            <img
              src={'https://o.remove.bg/downloads/3f18769f-b4eb-4153-8a1d-794703538a94/histogram-charts-business-infographic-template-with-stock-diagrams-statistic-bars-line-graphs-charts-presentation-finance-report-vector-set-charting-dashboard_176516-1328-removebg-preview.png'}
              alt="Image Description"
              className="responsive-image"
            
            />
            
        </div>



      </main>
    </div>
  );
};

export default Home;

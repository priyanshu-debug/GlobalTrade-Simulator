import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Users, ExternalLink, Activity } from 'lucide-react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard/stats');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading || !data) {
    return <div style={{ color: 'white' }}>Loading Dashboard...</div>;
  }

  const lineChartData = {
    labels: data.revenueOverTime.labels,
    datasets: [
      {
        fill: true,
        label: 'Revenue ($)',
        data: data.revenueOverTime.data,
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: data.inquiriesByCategory.labels,
    datasets: [
      {
        label: 'Top Products by Inquiry',
        data: data.inquiriesByCategory.data,
        backgroundColor: [
          'rgba(79, 70, 229, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(148, 163, 184, 0.8)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#F8FAFC' } },
    },
    scales: {
      y: { ticks: { color: '#94A3B8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      x: { ticks: { color: '#94A3B8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <header className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <h1>Seller Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Welcome back! Here is your trading overview powered by live Mock Server.</p>
        </div>
        <button className="btn btn-primary"><Activity size={16} /> Generate Report</button>
      </header>

      {/* KPI Cards */}
      <div className="grid-cols-3" style={{ marginBottom: '2rem' }}>
        <div className="card glass-panel flex-between">
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Total Revenue</p>
            <h3>${data.kpis.revenue.toLocaleString()} <span style={{ fontSize: '0.875rem', color: data.kpis.revenueGrowth > 0 ? 'var(--secondary)' : 'var(--accent)', fontWeight: 'normal' }}>
              {data.kpis.revenueGrowth > 0 ? <ArrowUpRight size={14} inline='true'/> : <ArrowDownRight size={14} inline='true'/>} {data.kpis.revenueGrowth}%
            </span></h3>
          </div>
          <div style={{ background: 'rgba(79, 70, 229, 0.2)', padding: '0.75rem', borderRadius: '50%' }}>
            <Activity color="var(--primary)" />
          </div>
        </div>
        
        <div className="card glass-panel flex-between">
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Active Inquiries</p>
            <h3>{data.kpis.activeInquiries} <span style={{ fontSize: '0.875rem', color: data.kpis.inquiriesGrowth > 0 ? 'var(--secondary)' : 'var(--accent)', fontWeight: 'normal' }}>
              {data.kpis.inquiriesGrowth > 0 ? <ArrowUpRight size={14} inline='true'/> : <ArrowDownRight size={14} inline='true'/>} {data.kpis.inquiriesGrowth}%
            </span></h3>
          </div>
          <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '0.75rem', borderRadius: '50%' }}>
            <Users color="var(--accent)" />
          </div>
        </div>

        <div className="card glass-panel flex-between">
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Conversion Rate</p>
            <h3>{data.kpis.conversionRate}% <span style={{ fontSize: '0.875rem', color: data.kpis.conversionGrowth > 0 ? 'var(--secondary)' : 'var(--accent)', fontWeight: 'normal' }}>
              {data.kpis.conversionGrowth > 0 ? <ArrowUpRight size={14} inline='true'/> : <ArrowDownRight size={14} inline='true'/>} {data.kpis.conversionGrowth}%
            </span></h3>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.75rem', borderRadius: '50%' }}>
            <ExternalLink color="var(--secondary)" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid-cols-2">
        <div className="card glass-panel">
          <h3 style={{ marginBottom: '1rem' }}>Revenue Over Time</h3>
          <Line options={chartOptions} data={lineChartData} />
        </div>
        <div className="card glass-panel">
          <h3 style={{ marginBottom: '1rem' }}>Inquiries by Category</h3>
          <Bar options={chartOptions} data={barChartData} />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageSquare, Award } from 'lucide-react';

const Community = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Trade Community & Knowledge Base</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Connect, learn, and grow your export business.</p>
      </header>

      <div className="grid-cols-3">
        {/* Knowledge Base */}
        <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
            <BookOpen size={20} /> Trade Knowledge Base
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="#">Understanding Incoterms 2020</a></li>
            <li><a href="#">Essential Export Documentation</a></li>
            <li><a href="#">How to choose a logistics provider</a></li>
            <li><a href="#">Customs Clearance Guide</a></li>
          </ul>
        </div>

        {/* Ask the Community */}
        <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)' }}>
            <MessageSquare size={20} /> Ask the Community
          </h3>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem' }}>
            <p style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>"Best port to use in Western India for electronics?"</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>3 replies • 2 mins ago</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem' }}>
            <p style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>"L/C confirmation vs. unconfirmed?"</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>12 replies • 1 hr ago</p>
          </div>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Post a Question</button>
        </div>

        {/* Success Stories */}
        <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
            <Award size={20} /> Success Stories
          </h3>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem', fontStyle: 'italic' }}>
            "Using the Price Benchmarking tool, we adjusted our ceramic exports pricing and secured 3 new buyers in the UAE within a month!"
            <p style={{ fontWeight: 'bold', fontStyle: 'normal', marginTop: '0.5rem', fontSize: '0.875rem' }}>- Rakesh, Gujarat Ceramics</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;

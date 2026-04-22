import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Bell } from 'lucide-react';

const Settings = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Settings & Subscription</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your profile, verification, and plans.</p>
      </header>

      <div className="grid-cols-2">
        <div className="card glass-panel">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck color="var(--primary)" /> Company Profile & Verification
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>Company Name</label>
              <input type="text" value="GlobalTech Exports Ltd" readOnly style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'white' }} />
            </div>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--secondary)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 'bold' }}>
                ✓ Verified Seller Badge
              </div>
            </div>
          </div>
        </div>

        <div className="card glass-panel">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bell color="var(--accent)" /> Notifications
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked /> New inquiry received emails
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked /> Supplier response alerts
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked /> Shipment status updates
            </label>
          </div>
        </div>

        <div className="card glass-panel" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CreditCard color="var(--secondary)" /> Sandbox Payments & Subscription
          </h3>
          <div className="grid-cols-2">
            <div style={{ border: '1px solid var(--primary)', padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '10px', background: 'var(--primary)', padding: '0.1rem 0.5rem', fontSize: '0.75rem', borderRadius: '0.5rem' }}>Current</div>
              <h4>Free Tier</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0' }}>Basic listings, limited AI checks.</p>
              <h3>$0 <span style={{ fontSize: '0.875rem' }}>/mo</span></h3>
            </div>
            <div style={{ border: '1px solid var(--border)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h4>Premium Exporter</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0' }}>Advanced AI pricing, unlimited simulator access, featured listings.</p>
              <h3>$49 <span style={{ fontSize: '0.875rem' }}>/mo</span></h3>
              <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Upgrade Now (Sandbox Sandbox)</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;

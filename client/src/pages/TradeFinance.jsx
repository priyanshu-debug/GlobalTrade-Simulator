import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, FileText, Globe, ArrowRight } from 'lucide-react';

const TradeFinance = () => {
  const [amount, setAmount] = useState(10000);
  
  // Dummy exchange rates
  const rates = { INR: 83.2, EUR: 0.92, GBP: 0.79 };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Trade Finance Simulator</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Learn and simulate L/C flows and currency risks.</p>
      </header>

      <div className="grid-cols-2">
        {/* Currency Risk Calculator */}
        <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <DollarSign color="var(--accent)" /> Currency Risk Calculator
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>See equivalent values with a simulated exchange rate.</p>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Deal Amount (USD)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: '100%', padding: '0.75rem', borderRadius: '0.5rem',
                background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)',
                color: 'white', fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div style={{ background: 'var(--surface-hover)', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--text-secondary)' }}>INR</h4>
              <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>₹{(amount * rates.INR).toLocaleString()}</p>
            </div>
            <div style={{ background: 'var(--surface-hover)', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--text-secondary)' }}>EUR</h4>
              <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>€{(amount * rates.EUR).toLocaleString()}</p>
            </div>
            <div style={{ background: 'var(--surface-hover)', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--text-secondary)' }}>GBP</h4>
              <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>£{(amount * rates.GBP).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* L/C Simulator Preview */}
        <div className="card glass-panel flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText color="var(--primary)" /> Letter of Credit (L/C) Flow
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Interactive step-by-step diagram of how trade finance secures a deal.
            </p>
          </div>
          
          <div style={{ width: '100%', background: 'var(--surface-hover)', padding: '1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
             <div style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--surface)', borderRadius: '0.5rem' }}>1. Buyer requests L/C</div>
             <ArrowRight size={16} color="var(--text-secondary)" />
             <div style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--surface)', borderRadius: '0.5rem' }}>2. Issuing Bank</div>
             <ArrowRight size={16} color="var(--text-secondary)" />
             <div style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--surface)', borderRadius: '0.5rem' }}>3. Seller gets L/C</div>
          </div>
          
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Start Full Simulation</button>
        </div>

        {/* Payment Terms Explainer */}
        <div className="card glass-panel" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Globe color="var(--secondary)" /> Payment Terms Explainer
          </h3>
          <div className="grid-cols-3">
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem' }}>
                <h4 style={{ color: 'var(--secondary)' }}>Net 30/60</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Payment is due 30 or 60 days after the invoice date. Good for buyers, risky for sellers.</p>
             </div>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem' }}>
                <h4 style={{ color: 'var(--primary)' }}>FOB (Free on Board)</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Seller pays for transportation of goods to the port of shipment, plus loading costs.</p>
             </div>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem' }}>
                <h4 style={{ color: 'var(--accent)' }}>CIF (Cost, Insurance, Freight)</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Seller covers cost, insurance, and freight to bring goods to the port of destination.</p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TradeFinance;

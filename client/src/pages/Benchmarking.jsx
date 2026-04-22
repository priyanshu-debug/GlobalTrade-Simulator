import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, TrendingDown, AlertCircle, RefreshCw } from 'lucide-react';
import axios from 'axios';

const Benchmarking = () => {
  const [query, setQuery] = useState('');
  const [price, setPrice] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBenchmark = async () => {
    if (!query || !price) {
      setError('Please enter both product/HS Code and your listed price.');
      return;
    }
    setError('');
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/benchmark/price', {
        query,
        price: parseFloat(price)
      });
      
      if (response.data.success) {
        setResult(response.data.data);
      } else {
        setError(response.data.message);
        setResult(null);
      }
    } catch (err) {
      setError('Failed to connect to the AI engine.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>AI Price Benchmarking</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Compare your listings against the market average in real-time.</p>
      </header>

      <div className="card glass-panel" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Product Category or HS Code (e.g., Cotton T-Shirts, 6109)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            flex: 2, minWidth: '300px', padding: '0.75rem 1rem', borderRadius: '0.5rem',
            background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)',
            color: 'white', fontSize: '1rem'
          }}
        />
        <input 
          type="number" 
          placeholder="Your Listing Price ($)"
          value={price}
          onChange={e => setPrice(e.target.value)}
          style={{
            flex: 1, minWidth: '150px', padding: '0.75rem 1rem', borderRadius: '0.5rem',
            background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)',
            color: 'white', fontSize: '1rem'
          }}
        />
        <button className="btn btn-primary" onClick={handleBenchmark} disabled={loading}>
          {loading ? <RefreshCw className="animate-spin" size={18} /> : <Search size={18} />} 
          Benchmark
        </button>
      </div>

      {error && (
        <div style={{ color: 'var(--accent)', background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <AlertCircle size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />{error}
        </div>
      )}

      {result && (
        <div className="grid-cols-2">
          <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ color: 'var(--primary)' }}>{result.productMatch}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Your Listed Price: <strong style={{color: 'white'}}>${result.userPrice.toFixed(2)}</strong></p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {result.diffPercent > 0 ? <TrendingUp size={16} color="var(--accent)" /> : <TrendingDown size={16} color="var(--secondary)" />}
                Market Average: ${result.marketRange.min.toFixed(2)} - ${result.marketRange.max.toFixed(2)}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {result.aiSuggestion}
              </p>
            </div>
          </div>

          {result.competitors && result.competitors.length > 0 && (
            <div className="card glass-panel">
              <h3 style={{ marginBottom: '1rem' }}>Competitor Analysis</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {result.competitors.map((comp, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                    <span>{comp.name} <strong>({comp.country})</strong></span>
                    <span style={{ fontWeight: 'bold' }}>${comp.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <AlertCircle size={16} /> Market intelligence automatically sourced by simulator DB.
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Benchmarking;

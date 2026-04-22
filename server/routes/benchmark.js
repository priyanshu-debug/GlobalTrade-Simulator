import express from 'express';
import { MarketPricesData, CompetitorsData } from '../data/mockDB.js';

const router = express.Router();

// POST /api/benchmark/price
// Body expected: { query: 'Cotton T-Shirts', price: 12.50 }
router.post('/price', (req, res) => {
  try {
    const { query, price } = req.body;

    if (!query || !price) {
      return res.status(400).json({ success: false, message: 'Query and price are required' });
    }

    // 1. Identify category from query
    const lowerQuery = query.toLowerCase();
    let matchedCategory = null;

    // Check HS Codes
    if (MarketPricesData.hscodes[query]) {
       matchedCategory = MarketPricesData.hscodes[query];
    } else {
       // Simple text match
       for (const key in MarketPricesData.categories) {
          if (lowerQuery.includes(key)) {
             matchedCategory = MarketPricesData.categories[key];
             break;
          }
       }
    }

    if (!matchedCategory) {
      return res.json({
         success: false,
         message: "Sorry, we do not have enough market data for this category yet to provide an accurate benchmark."
      });
    }

    // 2. Perform AI benchmarking logic (Analytical comparison)
    const avgMarket = (matchedCategory.min + matchedCategory.max) / 2;
    const diff = price - avgMarket;
    const diffPercent = (diff / avgMarket) * 100;
    
    let aiSuggestion = '';
    
    if (diffPercent > 10) {
      aiSuggestion = `Your price is ~${Math.round(diffPercent)}% higher than the regional average. Highlight premium quality, certifications (e.g. organic, ISO), or consider offering volume discounts.`;
    } else if (diffPercent < -10) {
      aiSuggestion = `Your price is ~${Math.abs(Math.round(diffPercent))}% lower than the average. You are highly competitive! Make sure shipping costs do not eat into your margins.`;
    } else {
      aiSuggestion = `Your pricing is perfectly aligned with the market average. To stand out, focus on fast delivery times and excellent buyer communication.`;
    }

    // 3. Find Competitors
    const categoryKey = Object.keys(MarketPricesData.categories).find(key => matchedCategory.name.toLowerCase().includes(key));
    const competitors = CompetitorsData.filter(c => c.categoryMatch === categoryKey);

    // 4. Return results
    res.json({
      success: true,
      data: {
        productMatch: matchedCategory.name,
        userPrice: parseFloat(price),
        marketRange: { min: matchedCategory.min, max: matchedCategory.max },
        diffPercent: Math.round(diffPercent),
        aiSuggestion,
        competitors
      }
    });

  } catch (error) {
    console.error("Benchmarking error", error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;

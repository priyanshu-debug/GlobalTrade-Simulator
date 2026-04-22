// A simulated mock database for our application
export const DashboardData = {
  kpis: {
    revenue: 124500,
    revenueGrowth: 12.5,
    activeInquiries: 45,
    inquiriesGrowth: -2.4,
    conversionRate: 18.2,
    conversionGrowth: 4.1
  },
  revenueOverTime: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [12000, 19000, 15000, 22000, 18000, 28000]
  },
  inquiriesByCategory: {
    labels: ['Textiles', 'Electronics', 'Agriculture', 'Machinery'],
    data: [65, 59, 80, 81]
  }
};

// Mock product category pricing data for the benchmarking logic
export const MarketPricesData = {
  hscodes: {
    '6109': { name: 'Cotton T-Shirts', min: 10.00, max: 11.50, unit: 'unit' },
    '8517': { name: 'Smartphones', min: 250.00, max: 350.00, unit: 'unit' },
    '1006': { name: 'Basmati Rice', min: 1.20, max: 1.50, unit: 'kg' },
    '8471': { name: 'Laptops', min: 500.00, max: 700.00, unit: 'unit' }
  },
  categories: {
    'cotton t-shirts': { name: 'Cotton T-Shirts', min: 10.00, max: 11.50, unit: 'unit' },
    'smartphones': { name: 'Smartphones', min: 250.00, max: 350.00, unit: 'unit' },
    'rice': { name: 'Rice', min: 1.00, max: 1.60, unit: 'kg' },
    'ceramics': { name: 'Ceramics', min: 5.00, max: 8.50, unit: 'unit' }
  }
};

export const CompetitorsData = [
  { name: 'GlobalTextiles Ltd', country: 'Vietnam', price: 9.80, categoryMatch: 'cotton t-shirts' },
  { name: 'EcoWear Inc', country: 'India', price: 11.00, categoryMatch: 'cotton t-shirts' },
  { name: 'SinoFabrics', country: 'China', price: 8.50, categoryMatch: 'cotton t-shirts' },
  { name: 'AgriExport Co.', country: 'Thailand', price: 1.35, categoryMatch: 'rice' },
  { name: 'TechHub', country: 'Taiwan', price: 280.00, categoryMatch: 'smartphones' }
];

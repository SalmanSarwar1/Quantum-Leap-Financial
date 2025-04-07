import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Portfolio = () => {
  const portfolioData = {
    totalValue: 125000,
    monthlyGrowth: 5.2,
    holdings: 12,
    annualReturn: 18.5,
    assets: [
      { name: 'Stocks', value: 75000, percentage: 60 },
      { name: 'Bonds', value: 25000, percentage: 20 },
      { name: 'Crypto', value: 25000, percentage: 20 }
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Investment Portfolio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">
              ${portfolioData.totalValue.toLocaleString()}
            </p>
            <p className="text-green-500">+{portfolioData.monthlyGrowth}% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{portfolioData.holdings}</p>
            <p className="text-gray-600">Diversified Assets</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Annual Return</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">
              +{portfolioData.annualReturn}%
            </p>
            <p className="text-gray-600">Year to Date</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Asset Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portfolioData.assets.map((asset) => (
              <div key={asset.name} className="space-y-2">
                <div className="flex justify-between">
                  <span>{asset.name}</span>
                  <span>${asset.value.toLocaleString()} ({asset.percentage}%)</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${asset.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
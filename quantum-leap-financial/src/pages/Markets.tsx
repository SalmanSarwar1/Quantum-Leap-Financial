import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Market = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Market Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Index</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">S&P 500</p>
            <p className="text-green-500">4,927.25 (+0.85%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trading Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">2.5B</p>
            <p className="text-gray-600">Shares Traded Today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">Bullish</p>
            <p className="text-gray-600">Fear & Greed Index: 65</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Market;
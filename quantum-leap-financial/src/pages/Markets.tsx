import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Markets = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Market Overview</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Gainers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Sample data - replace with real data */}
              <div className="flex justify-between items-center">
                <span>AAPL</span>
                <span className="text-green-500">+2.45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>MSFT</span>
                <span className="text-green-500">+1.87%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Markets;
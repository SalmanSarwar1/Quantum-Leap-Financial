import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import StockChart3D from '../components/StockChart3D';

const Portfolio = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Investment Portfolio</h1>

      <Card>
        <CardHeader>
          <CardTitle>3D Stock Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <StockChart3D />
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
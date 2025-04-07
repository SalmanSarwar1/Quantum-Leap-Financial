import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Portfolio = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Investment Portfolio</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Investments</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add portfolio content here */}
          <p>Your current investments will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
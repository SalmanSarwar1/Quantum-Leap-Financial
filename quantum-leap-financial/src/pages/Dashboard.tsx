import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Financial Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">$45,678.90</p>
            <p className="text-green-500">+2.5% today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">12</p>
            <p className="text-gray-500">Across 5 categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">$3,456.78</p>
            <p className="text-green-500">+15.2% all time</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
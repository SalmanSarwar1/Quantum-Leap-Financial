import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Transaction = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Transaction History</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add transaction history content here */}
          <p>Your recent transactions will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transaction;
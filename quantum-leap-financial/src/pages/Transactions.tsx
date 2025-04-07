import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      type: 'Buy',
      symbol: 'AAPL',
      amount: 5000,
      date: 'April 7, 2024',
      status: 'completed'
    },
    {
      id: 2,
      type: 'Sell',
      symbol: 'TSLA',
      amount: -3200,
      date: 'April 6, 2024',
      status: 'completed'
    },
    {
      id: 3,
      type: 'Buy',
      symbol: 'MSFT',
      amount: 2800,
      date: 'April 5, 2024',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Transaction History</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div 
                key={transaction.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <p className="font-semibold">
                    {transaction.type} {transaction.symbol}
                  </p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <p className={`font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          
          <button className="mt-6 w-full py-2 text-blue-600 hover:text-blue-800 text-center border border-blue-600 rounded-lg">
            View All Transactions
          </button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Total Bought</p>
              <p className="text-2xl font-bold text-green-600">$7,800</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Total Sold</p>
              <p className="text-2xl font-bold text-red-600">$3,200</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Net Flow</p>
              <p className="text-2xl font-bold text-blue-600">$4,600</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
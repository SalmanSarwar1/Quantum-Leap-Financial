import React from 'react';

export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
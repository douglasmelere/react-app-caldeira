import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-transparent shadow-lg" style={{ borderTopColor: 'transparent', borderRightColor: '#4FD1C5', borderBottomColor: '#81E6D9', borderLeftColor: '#4FD1C5' }}></div>
    </div>
  );
};


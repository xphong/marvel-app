import React from 'react';

import Spinner from '../ui/Spinner';

const WithLoading = Component => ({ isLoading, ...props}) => {
    if (isLoading) return <Spinner />;
    return <Component {...props} />;
};

export default WithLoading;

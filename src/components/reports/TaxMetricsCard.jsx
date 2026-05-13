import React from 'react';
import GenericMetricsCard from '../reports/GenericMetricsCard';

const TaxMetricsCard = ({ data, generatedAt }) => {
    return (
        <GenericMetricsCard
            title="Tax Analysis"
            data={data}
            generatedAt={generatedAt}
        />
    );
};
export default TaxMetricsCard;
import React from 'react';
import GenericMetricsCard from '../reports/GenericMetricsCard';

const SubsidyMetricsCard = ({ data, generatedAt }) => {
    return (
        <GenericMetricsCard
            title="Subsidy Overview"
            data={data}
            generatedAt={generatedAt}
        />
    );
};
export default SubsidyMetricsCard;
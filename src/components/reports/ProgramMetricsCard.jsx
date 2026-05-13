import React from 'react';
import GenericMetricsCard from '../../core/GenericMetricsCard';
const ProgramMetricsCard = ({ data, generatedAt }) => {
    return (
        <GenericMetricsCard
            title="Program Performance"
            data={data}
            generatedAt={generatedAt}
        />
    );
};



export default ProgramMetricsCard;
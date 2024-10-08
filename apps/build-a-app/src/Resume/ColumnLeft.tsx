import styled from 'styled-components';
import { GridArea } from './Grid';
import React from 'react';
import { SectionHeading } from './Resume';
import {
    COLOR_TEXT_PRIMARY,
    COLOR_TEXT_SECONDARY
} from '../style/StyleBoundaryResume';

export const GridAreaTitleContainer = styled.div`
    ${GridArea('title')};
`;
const GridAreaExperience = styled.section`
    ${GridArea('experience')};

    margin-top: 40px;

    h2 {
        margin-bottom: 20px;
    }
`;
const GridAreaSummary = styled.section`
    ${GridArea('summary')};

    margin-top: 48px;

    font-weight: 600;
`;
export const EngineerName = () => (
    <h1 style={{ color: COLOR_TEXT_SECONDARY }}>Heron Wu-Navarro</h1>
);
const EngineerSummary = () => (
    <p style={{ color: COLOR_TEXT_SECONDARY, fontWeight: '900' }}>
        Highly skilled Software Engineer with 7+ years of experience in
        full-stack development, cloud architecture, and distributed microservice
        systems. Adept at designing and implementing scalable, accessible
        solutions focused on enhancing user experience. Seeking a Senior
        Software Engineering role to leverage expertise in a dynamic
        environment, driving innovative projects and delivering robust,
        user-centered software solutions.
    </p>
);

interface EngineerExperienceProps {
    company: string;
    location: string;
    title: string;
    startDate: string;
    endDate: string;
    jd: string[];
}

const EngineerExperience: React.FC<EngineerExperienceProps> = ({
    company,
    location,
    title,
    startDate,
    endDate,
    jd
}) => (
    <>
        <h3 style={{ color: COLOR_TEXT_SECONDARY }}>
            {company},{' '}
            <span style={{ fontWeight: 400 }}>
                {location} &mdash; {title}
            </span>
        </h3>
        <h4 style={{ color: COLOR_TEXT_PRIMARY, fontWeight: '400' }}>
            {startDate} - {endDate}
        </h4>
        <ul>
            {jd.map((description) => (
                <li>
                    <p>{description}</p>
                </li>
            ))}
        </ul>
    </>
);
export const ColumnLeft = () => {
    return (
        <div style={{ maxWidth: '445px' }}>
            <GridAreaSummary>
                <EngineerSummary />
            </GridAreaSummary>
            <GridAreaExperience>
                <SectionHeading>Experience</SectionHeading>
                <EngineerExperience
                    company={'CBT Nuggets'}
                    location={'Eugene, OR'}
                    title={'Adept Software Engineer'}
                    startDate={'June 2022'}
                    endDate={'September 2024'}
                    jd={[
                        'Full-stack engineering for a billing and subscription&nbsp management system that integrates with Salesforce, Sage Intacct, Avalara Tax, and others.',
                        'Led platform usage reporting and analytics utilizing Rockset data ingestions from DynamoDB data sources.',
                        'Ensured continuous platform accessibility by conducting regular maintenance and resolving critical bugs, enhancing user experience.'
                    ]}
                />
                <EngineerExperience
                    company={'REVL Inc.'}
                    location={'Eugene, OR'}
                    title={'Software Engineer'}
                    startDate={'January 2021'}
                    endDate={'March 2022'}
                    jd={[
                        'Managed all React and Typescript frontend code for site servers deployed around the world.',
                        'Developed Kotlin backend to support UI development.',
                        'Triage and administration of distributed site servers.'
                    ]}
                />
                <EngineerExperience
                    company={'CBT Nuggets'}
                    location={'Eugene, OR'}
                    title={'Software Engineer'}
                    startDate={'July 2017'}
                    endDate={'January 2021'}
                    jd={[
                        'Pioneered full-stack modern technology at CBT Nuggets.',
                        'Engineered greenfield React UI and NodeJS microservices to support transition of source-of-truth systems.',
                        'Designed and developed transitional systems – a distributed transaction architecture utilizing AWS services such as Cloudformation, State Machines, Lambda and SQS.'
                    ]}
                />
            </GridAreaExperience>
        </div>
    );
};

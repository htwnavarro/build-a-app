import styled from 'styled-components';
import { GridArea } from './Grid';
import React from 'react';
import { SectionHeading } from './Resume';
import { OpenSans } from '../style/StyleBoundaryResume';

export const GridAreaContact = styled.section`
    ${OpenSans};

    ${GridArea('contact')};

    font-size: 10pt;
    margin-top: 8px;

    @media (min-width: 687px) {
        margin-top: 16px;
    }

    p,
    a {
        font-size: 10pt;
        font-weight: 400;
        margin: 0;
        line-height: 1.35;
    }

    a {
        font-weight: 700;
    }
`;

const GridAreaSkills = styled.section`
    ${GridArea('skills')};

    margin-top: 34px;
`;

const GridAreaLang = styled.section`
    ${GridArea('lang')};
`;

export const ColumnRight = () => {
    return (
        <div style={{ maxWidth: '210px' }}>
            <GridAreaSkills>
                <SectionHeading>Skills</SectionHeading>
                <ul>
                    <li>Multi-region Cloud Architecture</li>
                    <li>Distributed Systems</li>
                    <li>Web Accessibility</li>
                    <li>UI/UX</li>
                </ul>
            </GridAreaSkills>
            <GridAreaLang>
                <SectionHeading>Languages and Technologies</SectionHeading>
                <ul>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>TypeScript</li>
                    <li>Kotlin</li>
                    <li>SQL</li>
                    <li>ReactJS</li>
                    <li>SCSS</li>
                    <li>Next.js</li>
                    <li>NodeJS</li>
                    <li>DynamoDB</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>GraphQL</li>
                    <li>Kubernetes</li>
                    <li>Docker</li>
                    <li>CloudFormation</li>
                    <li>AWS CDK</li>
                    <li>Git</li>
                </ul>
            </GridAreaLang>
        </div>
    );
};

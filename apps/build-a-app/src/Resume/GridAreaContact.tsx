import styled from 'styled-components';
import { GridArea } from './Grid';
import React from 'react';
import { SectionHeading } from './Resume';
import { COLOR_TEXT_SECONDARY, OpenSans } from '../style/StyleBoundaryResume';

const GridAreaContact = styled.section`
    ${OpenSans};

    ${GridArea('contact')};

    font-size: 10pt;
    margin-top: 16px;

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
            <GridAreaContact>
                <p>Eugene, OR</p>
                <a
                    href={'tel:+15419999483'}
                    style={{ display: 'block', color: COLOR_TEXT_SECONDARY }}
                >
                    (541) 999-9483
                </a>
                <a
                    href={'mailto:herontnavarro@gmail.com'}
                    style={{ display: 'block' }}
                >
                    herontnavarro@gmail.com
                </a>
            </GridAreaContact>
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

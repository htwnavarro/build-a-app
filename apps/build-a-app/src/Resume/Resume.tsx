import React, { PropsWithChildren } from 'react';
import { StyleBoundaryResume } from '../style/StyleBoundaryResume';
import { ColumnLeft } from './ColumnLeft';
import { ColumnRight } from './GridAreaContact';
import styled from 'styled-components';

const LayoutResume = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
`;

const Resume = () => {
    return (
        <StyleBoundaryResume>
            <LayoutResume>
                <ColumnLeft />
                <ColumnRight />
            </LayoutResume>
        </StyleBoundaryResume>
    );
};

export const SectionHeading: React.FC<PropsWithChildren> = ({ children }) => {
    return <h2>{children}</h2>;
};

export default Resume;

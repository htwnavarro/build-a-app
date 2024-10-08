import React, { PropsWithChildren } from 'react';
import {
    COLOR_TEXT_SECONDARY,
    StyleBoundaryResume
} from '../style/StyleBoundaryResume';
import { ColumnLeft, EngineerName, GridAreaTitleContainer } from './ColumnLeft';
import { ColumnRight, GridAreaContact } from './GridAreaContact';
import styled from 'styled-components';

const LayoutResume = styled.div`
    margin-top: 64px;
    height: 100vh;
    max-width: 687px;
`;

const ContainerResume = styled.div`
    @media (min-width: 687px) {
        gap: 32px;
    }
`;

const Resume = () => {
    return (
        <StyleBoundaryResume>
            <LayoutResume className={'mx-auto'}>
                <ContainerResume className={'d-flex flex-row flex-wrap'}>
                    <GridAreaTitleContainer style={{ width: '445px' }}>
                        <EngineerName />
                    </GridAreaTitleContainer>
                    <GridAreaContact>
                        <p>Eugene, OR</p>
                        <a
                            href={'tel:+15419999483'}
                            style={{
                                display: 'block',
                                color: COLOR_TEXT_SECONDARY
                            }}
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
                    <ColumnLeft />
                    <ColumnRight />
                </ContainerResume>
            </LayoutResume>
        </StyleBoundaryResume>
    );
};

export const SectionHeading: React.FC<PropsWithChildren> = ({ children }) => {
    return <h2>{children}</h2>;
};

export default Resume;

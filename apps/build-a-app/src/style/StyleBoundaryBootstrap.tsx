import { PropsWithChildren } from 'react';
import './bootstrap.scss';

export const StyleBoundaryBootstrap: React.FC<PropsWithChildren> = ({
    children
}) => <div className={'bootstrap'}>{children}</div>;

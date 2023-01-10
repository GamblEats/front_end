import styled from 'styled-components';
import { WidgetContainerProps } from './Widget';

export const WidgetHeader = styled.div<WidgetContainerProps>`
    position: inherit;
    font-size: 2em;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 0 1.1rem;
    gap: ${props => (props.isHoverOrOpen ? '0.8rem' : '0')};
    background-color: white;
    min-height: 3.5rem;
    min-width: ${props => (props.isOpen ? '20rem' : '3.5rem')};
    border-radius: 1.75rem;
    cursor: pointer;
    align-items: center;
    transition: min-width 0.5s ease-in-out, gap 0.5s ease-in-out;
    z-index: 2;
`;

export const WidgetTitle = styled.div`
    font-size: 0.8rem;
    display: inline-block;
    vertical-align: bottom;
    overflow: hidden;
    max-width: 0;
    transition: max-width 0.7s;
    text-align: left;
    width: 10rem;
`;

export const WidgetContainer = styled.div`
    position: relative;
`;

export const WidgetOpenedContainer = styled.div<WidgetContainerProps>`
    overflow: hidden;
    position: absolute;
    right: 0;
    z-index: 1;
    margin-top: -3.5rem;
    padding-top: 3.5rem;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 1.75rem;
    text-align: center;
    align-items: center;
    width: ${props => (props.isOpen ? '20rem' : '3.5rem')};
    height: ${props => (props.isOpen ? '22rem' : '3.5rem')};
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
`;

export const DeliveryContainer = styled.div`
    display: flex;
`;

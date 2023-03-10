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
    overflow-y: auto;
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
    box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.2);
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &:-webkit-scrollbar {
        display: none;
    }
`;

export const NotificationIconContainer = styled.div`
    position: relative;
`;

export const NotificationCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #e5bf00;
    position: absolute;
    right: -0.2rem;
    top: 0.2rem;
`;

export const DeliveryContainer = styled.div`
    display: flex;
    gap: 0.6rem;
    height: 100%;
    padding-inline: 1rem;
    margin-top: -1rem;
    height: 111%;
`;

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 73%;
    justify-content: space-between;
    margin: 2.8rem 0;
`;

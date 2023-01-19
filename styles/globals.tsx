import styled from 'styled-components';
import { TextProps } from '../pages/referral';

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 3.5rem;
    @media (max-width: 800px) {
        padding: 2rem;
    }
`;

export const Slogan = styled.div`
    font-size: 5em;
    font-weight: 700;
    align-items: center;
    width: 10em;
    color: #143642;
    @media (max-width: 1000px) {
        font-size: 4em !important;
    }
    @media (max-width: 600px) {
        font-size: 2.5em !important;
    }
`;

export const Logo = styled.img`
    height: 100%;
`;

export const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1.4rem 0;
    gap: 1.5rem;
`;
export const SectionTitle = styled.div`
    color: #143642;
    font-size: 1.7rem;
    font-weight: 600;
    white-space: nowrap;
`;
export const SectionLine = styled.div`
    background-color: #d9d9d9;
    width: 100%;
    height: 0.12rem;
`;

// --- Referral Page --- //

export const ReferralContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
    }
`;

export const MultiplierContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem 2rem 1rem;
    background-color: white;
    border-radius: 1.2rem;
`;

export const Multiplier = styled.div`
    font-size: 6rem;
    font-weight: 600;
    color: #e5bf00;
`;

export const MultiplierText = styled.div`
    font-size: 1rem;
    color: #143642;
    max-width: 8rem;
`;

export const CodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background-color: white;
    border-radius: 1.2rem;
    padding: 2rem;
    gap: 2rem;
    @media (min-width: 800px) {
        grid-column: span 2;
    }
    @media (max-width: 1200px) {
        order: 3;
    }
`;

export const CodeInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

export const CodeInput = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: 1rem;
`;

export const Text = styled.div<TextProps>`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight || '500'};
    font-style: ${props => (props.italic ? 'italic' : 'normal')};
    text-align: ${props => (props.align ? props.align : 'normal')};
    color: ${props => props.color || '#143642'};
    opacity: ${props => props.opacity || 1};
`;

export const ListContainer = styled.div`
    background-color: white;
    height: 19rem;
    border-radius: 1.2rem;
    overflow: hidden;
    overflow-y: auto;
`;

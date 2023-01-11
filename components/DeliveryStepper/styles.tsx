import styled from 'styled-components';
import { LineStep } from '../../public/const';
import { StepLineProps, StepperContainerProps } from './DeliveryStepper';

export const StepperContainer = styled.div<StepperContainerProps>`
    display: flex;
    flex-direction: ${props => (props.isInColumn ? 'column' : 'row')};
    align-items: center;
    gap: 1em;
    width: 100%;
`;

export const StepCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5em;
    width: 3.5em;
    min-width: 3.5em;
    background-color: ${props => props.color};
    border-radius: 50%;
`;

export const StepLine = styled.div<StepLineProps>`
    background: linear-gradient(
        90deg,
        #27ae60 ${props => (props.lineStep == LineStep.EMPTY ? 0 : props.lineStep == LineStep.HALF ? 50 : 100)}%,
        #f2f2f2 ${props => (props.lineStep == LineStep.EMPTY ? 0 : props.lineStep == LineStep.HALF ? 50 : 0)}%
    );
    transition: background 1s linear;
    color: white;
    height: 0.2em;
    border-radius: 0.2em;
    width: 100%;
    /* transform: rotate(${props => (props.isInColumn ? '90deg' : '0deg')}); */
`;

import styled from 'styled-components';
import { LineStep } from '../../public/const';
import { StepLineProps, StepperContainerProps } from './DeliveryStepper';

export const StepperContainer = styled.div<StepperContainerProps>`
    display: flex;
    flex-direction: ${props => (props.isInColumn ? 'column' : 'row')};
    align-items: center;
    /* gap: 1em; */
    width: ${props => (props.isInColumn ? '' : '100%')};
`;

export const StepCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3.5em;
    width: 3.5em;
    min-width: 3.5em;
    background-color: ${props => props.color};
    border-radius: 50%;
`;

export const StepLine = styled.div<StepLineProps>`
    background: linear-gradient(
        ${props => (props.isInColumn ? '180deg' : '90deg')},
        #27ae60 ${props => (props.lineStep == LineStep.EMPTY ? 0 : props.lineStep == LineStep.HALF ? 50 : 100)}%,
        #f2f2f2 ${props => (props.lineStep == LineStep.EMPTY ? 0 : props.lineStep == LineStep.HALF ? 50 : 0)}%
    );
    transition: background 1s linear;
    color: white;
    height: ${props => (props.isInColumn ? '100%' : '0.2em')};
    border-radius: 0.2em;
    width: ${props => (props.isInColumn ? '0.2em' : '100%')};
`;

import { faCircleCheck, faHouse, faKitchenSet, faRoad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeliveryStep, LineStep } from '../../public/const';
import { StepCircle, StepLine, StepperContainer } from './styles';

interface Props {
    step: DeliveryStep;
    isInWidget?: boolean;
}

export interface StepperContainerProps {
    isInColumn: boolean;
}
export interface StepLineProps {
    lineStep: LineStep;
    isInColumn: boolean;
}

const DeliveryStepper = ({ step, isInWidget = false }: Props) => {
    const stepValue = Object.values(DeliveryStep); // De 6 à 10
    return (
        <StepperContainer isInColumn={isInWidget}>
            <StepCircle color={stepValue.indexOf(step) > 6 ? '#27ae60' : '#f2f2f2'}>
                <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faCircleCheck} />
            </StepCircle>
            <StepLine
                isInColumn={isInWidget}
                lineStep={
                    stepValue.indexOf(step) == 6
                        ? LineStep.EMPTY
                        : stepValue.indexOf(step) == 7
                        ? LineStep.HALF
                        : LineStep.COMPLETE
                }></StepLine>
            <StepCircle color={stepValue.indexOf(step) > 7 ? '#27ae60' : '#f2f2f2'}>
                <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faKitchenSet} />
            </StepCircle>
            <StepLine
                isInColumn={isInWidget}
                lineStep={
                    stepValue.indexOf(step) < 9
                        ? LineStep.EMPTY
                        : stepValue.indexOf(step) == 9
                        ? LineStep.HALF
                        : LineStep.COMPLETE
                }></StepLine>
            <StepCircle color={stepValue.indexOf(step) > 9 ? '#27ae60' : '#f2f2f2'}>
                <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faRoad} />
            </StepCircle>
            <StepLine
                isInColumn={isInWidget}
                lineStep={
                    stepValue.indexOf(step) < 10
                        ? LineStep.EMPTY
                        : stepValue.indexOf(step) == 10
                        ? LineStep.HALF
                        : LineStep.COMPLETE
                }></StepLine>
            <StepCircle color={stepValue.indexOf(step) > 10 ? '#27ae60' : '#f2f2f2'}>
                <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faHouse} />
            </StepCircle>
        </StepperContainer>
    );
};

export default DeliveryStepper;

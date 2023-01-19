import { faCircleCheck, faHouse, faKitchenSet, faRoad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import { DeliveryStep, LineStep } from '../../public/const';
import Button from '../globals/Button';
import { StepCircle, StepLine, StepperContainer } from './styles';

interface Props {
    step: DeliveryStep;
    isInWidget?: boolean;
    isInOrder?: boolean;
    setReadyToPickup?: () => void;
}

export interface StepperContainerProps {
    isInColumn: boolean;
}
export interface StepLineProps {
    lineStep: LineStep;
    isInColumn: boolean;
}

const DeliveryStepper = ({ step, isInWidget = false, isInOrder = false, setReadyToPickup }: Props) => {
    const { t } = useTranslation('common');
    const stepValue = Object.values(DeliveryStep);
    return (
        <StepperContainer isInColumn={isInWidget} style={{ transform: isInOrder || isInWidget ? 'scale(0.8)' : '' }}>
            <StepCircle color={stepValue.indexOf(step) > 0 ? '#27ae60' : '#f2f2f2'}>
                <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faCircleCheck} />
            </StepCircle>
            <StepLine
                isInColumn={isInWidget}
                lineStep={
                    stepValue.indexOf(step) == 0
                        ? LineStep.EMPTY
                        : stepValue.indexOf(step) == 1
                        ? LineStep.HALF
                        : LineStep.COMPLETE
                }></StepLine>
            <StepCircle color={stepValue.indexOf(step) > 1 ? '#27ae60' : '#f2f2f2'}>
                <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faKitchenSet} />
            </StepCircle>
            <StepLine
                isInColumn={isInWidget}
                style={{ width: isInOrder && stepValue.indexOf(step) === 1 ? '50%' : isInWidget ? '' : '100%' }}
                lineStep={
                    stepValue.indexOf(step) < 3
                        ? LineStep.EMPTY
                        : stepValue.indexOf(step) == 3
                        ? LineStep.HALF
                        : LineStep.COMPLETE
                }></StepLine>
            {!(isInOrder && stepValue.indexOf(step) === 1) && (
                <>
                    <StepCircle color={stepValue.indexOf(step) > 3 ? '#27ae60' : '#f2f2f2'}>
                        <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faRoad} />
                    </StepCircle>
                    <StepLine
                        isInColumn={isInWidget}
                        lineStep={
                            stepValue.indexOf(step) < 4
                                ? LineStep.EMPTY
                                : stepValue.indexOf(step) == 4
                                ? LineStep.HALF
                                : LineStep.COMPLETE
                        }></StepLine>
                    <StepCircle color={stepValue.indexOf(step) > 4 ? '#27ae60' : '#f2f2f2'}>
                        <FontAwesomeIcon fontSize={'x-large'} color="#fefefe" icon={faHouse} />
                    </StepCircle>
                </>
            )}
            {isInOrder && stepValue.indexOf(step) === 1 && (
                <Button text={t('readyToPickup')} backgroundColor="#27AE60" onClick={setReadyToPickup!}></Button>
            )}
        </StepperContainer>
    );
};

export default DeliveryStepper;

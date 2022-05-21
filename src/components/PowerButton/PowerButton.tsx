import Button from 'react-bootstrap/Button';

interface PowerButtonProps {
  power: boolean;
  onPowerChange: () => void;
}

function PowerButton(props: PowerButtonProps) {
  return (
    <Button variant="primary" onClick={props.onPowerChange}>
      {props.power ? 'Off' : 'On'}
    </Button>
  );
}

export { PowerButton };

import { useEffect, useState } from 'react';
import { Bulb } from '../AddBulb';

interface BulbLayoutProps {
  bulbs: Bulb[];
  power: boolean;
}
function BulbLayout(props: BulbLayoutProps) {
  const [processedBulbs, setProcessedBulbs] = useState<Bulb[]>();
  const onPowerChange = (bulbs: Bulb[], power: boolean) => {
    return bulbs?.map((bulb) => {
      power ? (bulb.status = true) : (bulb.status = false);
      return bulb;
    });
  };

  useEffect(() => {
    setProcessedBulbs(onPowerChange(props.bulbs, props.power));
  }, [props.power, props.bulbs]);
  return (
    <>
      {processedBulbs?.map((bulb) => (
        <span
          key={bulb.id}
          style={{
            backgroundColor: bulb.getColour(),
            width: '20px',
            height: '20px',
            margin: '10px',
            borderStyle: 'solid'
          }}
        />
      ))}
    </>
  );
}

export { BulbLayout };

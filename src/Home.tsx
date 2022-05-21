import { useState } from 'react';
import { AddBulb } from './components/AddBulb';
import { PowerButton } from './components/PowerButton';

function Home() {
  const [power, setPower] = useState(false);

  const onPowerChange = () => setPower(!power);

  return (
    <>
      <PowerButton onPowerChange={onPowerChange} power={power} />
      <AddBulb power={power} />
    </>
  );
}

export default Home;

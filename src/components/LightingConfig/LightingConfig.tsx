import { Button } from 'react-bootstrap';

function LightingConfig() {
  const configs = ['Random', 'Even- Odd'];
  return (
    <>
      {configs.map((config) => (
        <Button key={config}>{config}</Button>
      ))}
    </>
  );
}

export { LightingConfig };

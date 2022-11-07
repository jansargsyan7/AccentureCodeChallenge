import * as React from 'react';
import { render } from '@testing-library/react-native';
import LayoutSelector from '../../src/components/LayoutSelector';

test('render layout switcher without issues', async () => {
  const isEnabled = true;
  const flipEnabled = (isEnabled) => {
    isEnabled = !isEnabled;
  };
  render(
    <LayoutSelector
      isEnabled={isEnabled}
      toggleSwitch={() => {
        flipEnabled(isEnabled);
      }}
    />
  );
});

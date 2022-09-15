import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import TemplateComponent from '.';

describe('<TemplateComponent />', () => {
  it('should do something', () => {
    const { queryByTestId } = render(<TemplateComponent />);
    expect(queryByTestId('template-component')).toHaveStyle({
      backgroundColor: 'red',
    });
  });
});

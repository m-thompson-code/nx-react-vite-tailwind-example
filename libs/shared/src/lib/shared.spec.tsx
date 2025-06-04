import { render } from '@testing-library/react';

import Shared from './shared';

describe('Shared', () => {

  it('should render successfully', () => {
    const { baseElement, getAllByText } = render(<Shared />);
    expect(baseElement).toBeTruthy();
    expect(getAllByText(new RegExp('Hello Second App', 'gi')).length > 0).toBeTruthy();
  });
});

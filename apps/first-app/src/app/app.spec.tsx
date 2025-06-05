import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(getAllByText(new RegExp('Hello First App', 'i')).length > 0).toBeTruthy();
  });

  it('should render shared component', () => {
    const { getAllByText } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(getAllByText(new RegExp('Hello Shared Component', 'i')).length > 0).toBeTruthy();
  });

  it('should render public env variable', () => {
    const { getAllByText } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(getAllByText(new RegExp('public environment variable for first app', 'i')).length > 0).toBeTruthy();
  });

  it('should NOT render private env variable', () => {
    const { getAllByText } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(getAllByText(new RegExp('DB_PASSWORD is not available on client', 'i')).length > 0).toBeTruthy();
  });
});

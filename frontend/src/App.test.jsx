import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the heading text', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /WebApp React \+ Express/i })).toBeInTheDocument();
  });
});

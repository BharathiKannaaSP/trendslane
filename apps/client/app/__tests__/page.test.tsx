import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

jest.mock('../../components/BannerImage', () => {
  const MockBannerImage = () => <div data-testid='banner-image'>Mock Banner Image</div>;
  MockBannerImage.displayName = 'BannerImage';
  return MockBannerImage;
});

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByTestId('banner-image')).toBeInTheDocument();
  });

  it('renders the mocked BannerImage content', () => {
    render(<HomePage />);
    expect(screen.getByText(/mock banner image/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});

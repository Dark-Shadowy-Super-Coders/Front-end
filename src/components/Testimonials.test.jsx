import { render, screen, fireEvent, act } from '@testing-library/react';
import TestimonialList from './Testimonials';

const mockTestimonials = [
  {
    text: "Test testimonial 1",
    author: "Author 1",
    image: "test1.jpg"
  },
  {
    text: "Test testimonial 2",
    author: "Author 2",
    image: "test2.jpg"
  },
  {
    text: "Test testimonial 3",
    author: "Author 3",
    image: "test3.jpg"
  }
];

describe('TestimonialList', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders testimonials section with title', () => {
    render(<TestimonialList testimonials={mockTestimonials} />);
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
  });

  test('displays first testimonial by default', () => {
    render(<TestimonialList testimonials={mockTestimonials} />);
    expect(screen.getByText('Test testimonial 1')).toBeInTheDocument();
    expect(screen.getByText('- Author 1')).toBeInTheDocument();
  });

  test('navigates to next testimonial when next button is clicked', () => {
    render(<TestimonialList testimonials={mockTestimonials} />);
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    fireEvent.click(nextButton);
    expect(screen.getByText('Test testimonial 2')).toBeInTheDocument();
  });

  test('navigates to previous testimonial when prev button is clicked', () => {
    render(<TestimonialList testimonials={mockTestimonials} />);
    const prevButton = screen.getByRole('button', { name: /previous/i });
    
    // Click next first to move to second testimonial
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    // Then click prev to go back to first
    fireEvent.click(prevButton);
    
    expect(screen.getByText('Test testimonial 1')).toBeInTheDocument();
  });

  test('auto-advances testimonials after 5 seconds', () => {
    render(<TestimonialList testimonials={mockTestimonials} />);
    
    expect(screen.getByText('Test testimonial 1')).toBeInTheDocument();
    
    // Fast-forward 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    expect(screen.getByText('Test testimonial 2')).toBeInTheDocument();
  });

  test('clicking dot indicator changes to correct testimonial', () => {
    render(<TestimonialList testimonials={mockTestimonials} />);
    
    // Find all dots and click the second one
    const dots = screen.getAllByRole('generic').filter(element => 
      element.className.includes('w-3 h-3')
    );
    fireEvent.click(dots[1]);
    
    expect(screen.getByText('Test testimonial 2')).toBeInTheDocument();
  });
});
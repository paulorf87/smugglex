import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ReminderCard from '@/app/components/reminder-card/reminder-card'

describe('Component: Reminder-card',()=>{
    beforeEach(()=>{
        render(<ReminderCard/>)
    });

    it('should render a heading with the text "Reminders"', ()=>{
        const heading = screen.getByRole('heading'); 
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Reminders'); 
    });

    it('should have a button with the text Setup now', ()=>{
        const button = screen.getByTestId('reminder-card-button');
        expect(button).toBeInTheDocument();
    });
});
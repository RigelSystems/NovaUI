import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NNotification from "./NNotification.vue";

describe("NNotification", () => {
    it('renders with message and time', () => {
        const { getByText } = render(NNotification, { 
            props: { 
                message: 'Test notification message', 
                time: '10:30 AM' 
            } 
        });
        expect(getByText('Test notification message')).toBeTruthy();
        expect(getByText('10:30 AM')).toBeTruthy();
    });

    it('renders with action buttons container', () => {
        const actionButtons = [
            { label: 'View', href: '/view', primary: true },
            { label: 'Dismiss', href: '/dismiss' }
        ];
        const { container } = render(NNotification, { 
            props: { 
                message: 'Test message', 
                time: '10:30 AM',
                actionButtons 
            } 
        });
        expect(container.querySelector('.n-notification__actions')).toBeTruthy();
    });
});

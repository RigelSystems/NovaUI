import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NNotificationList from "./NNotificationList.vue";

describe("NNotificationList", () => {
    it('renders with required props', () => {
        const { container } = render(NNotificationList, { 
            props: { 
                url: 'https://api.example.com/notifications',
                method: 'get',
                params: { page: 1 },
                accessToken: 'test-token'
            } 
        });
        expect(container.querySelector('.n-notification-list')).toBeTruthy();
    });

    it('renders the notification list container', () => {
        const { container } = render(NNotificationList, { 
            props: { 
                url: 'https://api.example.com/notifications'
            } 
        });
        expect(container.querySelector('.n-notification-list')).toBeTruthy();
    });
});

import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NNotificationList from "./NNotificationList.vue";

describe("NNotificationList", () => {
    it('renders with label', () => {
        const { getByText } = render(NNotificationList, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NNotificationList, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});

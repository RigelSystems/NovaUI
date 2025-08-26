import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NModal from "./NModal.vue";

describe("NModal", () => {
    it('renders with title and button', () => {
        const { getByText } = render(NModal, { 
            props: { 
                title: 'Test Modal',
                buttonLabel: 'Open Modal',
                modelValue: false
            } 
        });
        expect(getByText('Test Modal')).toBeTruthy();
        expect(getByText('Open Modal')).toBeTruthy();
    });

    it('shows modal when modelValue is true', () => {
        const { container } = render(NModal, { 
            props: { 
                title: 'Test',
                buttonLabel: 'Open',
                modelValue: true
            } 
        });
        expect(container.querySelector('.n-modal-overlay')).toBeTruthy();
    });
});

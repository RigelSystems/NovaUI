import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NModal from "./NModal.vue";
import NButton from "../NButton/NButton.vue";

describe("NModal", () => {
    it('renders with title and button', async () => {
        const { getByText } = render(NModal, { 
            props: { 
                title: 'Test Modal',
                buttonLabel: 'Open Modal',
                modelValue: false
            },
            global: {
                components: {
                    NButton
                }
            }
        });
        expect(getByText('Open Modal')).toBeTruthy();
    });

    it('shows modal when modelValue is true', async () => {
        const { container, getByText } = render(NModal, { 
            props: { 
                title: 'Test Modal',
                buttonLabel: 'Open',
                modelValue: true
            },
            global: {
                components: {
                    NButton
                }
            }
        });
        expect(container.querySelector('.n-modal__overlay')).toBeTruthy();
        expect(getByText('Test Modal')).toBeTruthy();
    });
});

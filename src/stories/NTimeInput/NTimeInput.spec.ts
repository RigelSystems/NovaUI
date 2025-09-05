import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTimeInput from "./NTimeInput.vue";

describe("NTimeInput", () => {
    it('renders with label', () => {
        const { getByText } = render(NTimeInput, { props: { label: 'Select Time' } });
        expect(getByText('Select Time')).toBeTruthy();
    });

    it('renders time input field', () => {
        const { container } = render(NTimeInput, { 
            props: { label: 'Time' } 
        });
        const input = container.querySelector('input[type="time"]');
        expect(input).toBeTruthy();
    });

    it('displays initial value', () => {
        const { container } = render(NTimeInput, { 
            props: { 
                label: 'Time', 
                value: '14:30' 
            } 
        });
        const input = container.querySelector('input[type="time"]') as HTMLInputElement;
        expect(input?.value).toBe('14:30');
    });

    it('emits update:value event when input changes', async () => {
        const { container, emitted } = render(NTimeInput, { 
            props: { label: 'Time' } 
        });
        const input = container.querySelector('input[type="time"]') as HTMLInputElement;
        
        await fireEvent.update(input, '15:45');
        
        expect(emitted()).toHaveProperty('update:value');
        expect(emitted()['update:value'][0]).toEqual(['15:45']);
    });

    it('shows placeholder when provided', () => {
        const { container } = render(NTimeInput, { 
            props: { 
                label: 'Time', 
                placeholder: 'HH:MM' 
            } 
        });
        const input = container.querySelector('input[type="time"]') as HTMLInputElement;
        expect(input?.placeholder).toBe('HH:MM');
    });
});

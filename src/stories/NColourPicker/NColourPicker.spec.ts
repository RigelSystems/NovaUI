import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NColourPicker from "./NColourPicker.vue";

describe("NColourPicker", () => {
    it('renders with label', () => {
        const { getByText } = render(NColourPicker, { props: { label: 'Select Color' } });
        expect(getByText('Select Color')).toBeTruthy();
    });

    it('renders color picker swatches', () => {
        const { container } = render(NColourPicker, { props: { label: 'Color' } });
        const swatches = container.querySelectorAll('.n-color-picker__swatch');
        expect(swatches.length).toBeGreaterThan(0);
    });

    it('emits update:value when color swatch is clicked', async () => {
        const { container, emitted } = render(NColourPicker, { props: { label: 'Color' } });
        const firstSwatch = container.querySelector('.n-color-picker__swatch');
        
        if (firstSwatch) {
            await fireEvent.click(firstSwatch);
            expect(emitted()).toHaveProperty('update:modelValue');
        }
    });

    it('renders native color input', () => {
        const { container } = render(NColourPicker, { props: { label: 'Color' } });
        expect(container.querySelector('input[type="color"]')).toBeTruthy();
    });
});

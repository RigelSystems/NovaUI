import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NHeroSection from "./NHeroSection.vue";

describe("NHeroSection", () => {
    it('renders with label', () => {
        const { getByText } = render(NHeroSection, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('emits click event', async () => {
        const { getByRole, emitted } = render(NHeroSection, { props: { label: 'Click' } });
        await fireEvent.click(getByRole('button'));
        expect(emitted()).toHaveProperty('click');
    });
});

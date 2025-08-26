import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NTimeline from "./NTimeline.vue";

describe("NTimeline", () => {
    const defaultProps = {
        items: [
            {
                startTime: '2024-01-01T09:00:00',
                duration: 60,
                content: 'Meeting 1',
                color: '#ff0000'
            },
            {
                startTime: '2024-01-01T10:30:00',
                duration: 30,
                content: 'Meeting 2',
                color: '#00ff00'
            }
        ],
        startDateTime: '2024-01-01T08:00:00',
        endDateTime: '2024-01-01T17:00:00'
    };

    it('renders timeline with required props', () => {
        const { container } = render(NTimeline, { props: defaultProps });
        expect(container.querySelector('.n-timeline')).toBeTruthy();
    });

    it('displays timeline items', () => {
        const { getByText } = render(NTimeline, { props: defaultProps });
        expect(getByText('Meeting 1')).toBeTruthy();
        expect(getByText('Meeting 2')).toBeTruthy();
    });

    it('renders time slots and current time line', () => {
        const { container } = render(NTimeline, { props: defaultProps });
        expect(container.querySelector('.n-timeline-current-time-line')).toBeTruthy();
        expect(container.querySelector('.n-timeline-lines')).toBeTruthy();
        expect(container.querySelector('.n-timeline-items')).toBeTruthy();
    });

    it('calculates timeline height based on duration', () => {
        const { container } = render(NTimeline, { props: defaultProps });
        const timeline = container.querySelector('.n-timeline') as HTMLElement;
        expect(timeline?.style.height).toBeTruthy();
    });
});

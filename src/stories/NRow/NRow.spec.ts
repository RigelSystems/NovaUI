import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import NRow from "./NRow.vue";

describe("NRow", () => {
    it('renders row container', () => {
        const { container } = render(NRow, { 
            props: { 
                cols: { sm: [100] }
            }
        });
        expect(container.firstChild).toBeTruthy();
    });

    it('renders with title when provided', () => {
        const { getByText } = render(NRow, { 
            props: { 
                cols: { sm: [50, 50] },
                title: 'Row Title'
            }
        });
        expect(getByText('Row Title')).toBeTruthy();
    });
});

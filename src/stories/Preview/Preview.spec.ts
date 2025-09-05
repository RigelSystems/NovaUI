import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import Preview from "./Preview.vue";
import NNavigationBar from "../NNavigationBar/NNavigationBar.vue";
import NHeroSection from "../NHeroSection/NHeroSection.vue";
import NDropdown from "../NDropdown/NDropdown.vue";
import NRow from "../NRow/NRow.vue";
import NCard from "../NCard/NCard.vue";
import NTextInput from "../NTextInput/NTextInput.vue";
import NButton from "../NButton/NButton.vue";
import NDashboardTile from "../NDashboardTile/NDashboardTile.vue";
import NScrollArrow from "../NScrollArrow/NScrollArrow.vue";

describe("Preview", () => {
    it('renders the preview container', () => {
        const { container } = render(Preview, { 
            props: { label: 'Preview Component' },
            global: {
                components: {
                    NNavigationBar,
                    NHeroSection,
                    NDropdown,
                    NRow,
                    NCard,
                    NTextInput,
                    NButton,
                    NDashboardTile,
                    NScrollArrow
                }
            }
        });
        expect(container.querySelector('.preview')).toBeTruthy();
    });

    it('renders static content sections', () => {
        const { getByText } = render(Preview, { 
            props: { label: 'Preview Component' },
            global: {
                components: {
                    NNavigationBar,
                    NHeroSection,
                    NDropdown,
                    NRow,
                    NCard,
                    NTextInput,
                    NButton,
                    NDashboardTile,
                    NScrollArrow
                }
            }
        });
        expect(getByText('Dropdowns')).toBeTruthy();
        expect(getByText('Contact Form')).toBeTruthy();
        expect(getByText("Please enter your details below and we'll contact you shortly!")).toBeTruthy();
    });
});

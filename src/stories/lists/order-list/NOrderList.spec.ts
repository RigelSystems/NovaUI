import { render } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import NOrderList from './NOrderList.vue';

// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ success: true }),
//   })
// ) as jest.Mock;

// describe('NList Component', () => {
//   const mockItems = [
//     { id: 1, body: '<p>Item 1</p>' },
//     { id: 2, body: '<p>Item 2</p>' },
//     { id: 3, body: '<p>Item 3</p>' },
//   ];

//   const updateUrl = 'https://example.com/api/reorder';

//   it('updates the order when dragged and dropped', async () => {
//     const { getAllByRole } = render(NList, {
//       props: { initialItems: mockItems, updateUrl },
//     });

//     let listItems = getAllByRole('listitem');

//     // Simulate dragging the first item to the second position
//     await fireEvent.dragStart(listItems[0]);
//     await fireEvent.drop(listItems[1]);

//     // Wait for Vue to update the DOM
//     await waitFor(() => {
//       listItems = getAllByRole('listitem');
//       expect(listItems[1].innerHTML).toContain('Item 1');
//     });

//     // Verify the HTTP request was made
//     expect(global.fetch).toHaveBeenCalledTimes(1);

//     // Verify the request body contains the correct reordered items
//     const expectedBody = JSON.stringify({
//       reorderedItems: [
//         { id: 2, position: 1 },
//         { id: 1, position: 2 },
//         { id: 3, position: 3 },
//       ],
//     });

//     expect(global.fetch).toHaveBeenCalledWith(updateUrl, expect.objectContaining({
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: expectedBody,
//     }));
//   });
// });

describe('NOrderList', () => {
    it('renders without crashing', () => {
        const { container } = render(NOrderList, {
            props: {
                updateUrl: 'https://example.com/api/reorder',
                items: [],
                modelName: 'test'
            }
        });
        expect(container).toBeTruthy();
    });
});

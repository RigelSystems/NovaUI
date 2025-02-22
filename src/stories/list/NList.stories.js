import NList from './NList.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Utilities/Lists',
  component: NList,
  tags: ['autodocs'],
    args: {
        initialItems: [
            { id: 1, body: "<p>Item 1</p>" },
            { id: 2, body: "<p>Item 2</p>" },
            { id: 3, body: "<p>Item 3</p>" },
            { id: 4, body: "<p>Item 4</p>" },
            { id: 5, body: "<p>Item 5</p>" },
        ],
        updateUrl: 'http://localhost:3000/update',
    }
}

export const List = {
    initialItems: [
        { id: 1, body: "<p>Item 1</p>" },
        { id: 2, body: "<p>Item 2</p>" },
        { id: 3, body: "<p>Item 3</p>" },
        { id: 4, body: "<p>Item 4</p>" },
        { id: 5, body: "<p>Item 5</p>" },
    ],
    updateUrl: 'http://localhost:3000/update',
}
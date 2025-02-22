import NList from './NList.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Utilities/Lists',
  component: NList,
  tags: ['autodocs'],
    args: {
        initialItems: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
            { id: 5, name: 'Item 5' },
        ],
        updateUrl: 'http://localhost:3000/update',
    }
}

export const List = {
    initialItems: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
    ],
    updateUrl: 'http://localhost:3000/update',
}
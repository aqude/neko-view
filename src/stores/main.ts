import { defineStore } from 'pinia';

export const useItemsStore = defineStore({
    id: 'main', // unique ID (with prefix) for this store
    state: () => ({
        items: [],
        favorites: [], // Store the favorite items separately
    }),
    actions: {
        loadItems() {
            // Load items from local storage
            const storedItems = localStorage.getItem('items');
            if (storedItems) {
                this.items = JSON.parse(storedItems);
            }

            // Load favorite items from local storage
            const storedFavorites = localStorage.getItem('favorites');
            if (storedFavorites) {
                this.favorites = JSON.parse(storedFavorites);
            }
        },
        saveItems() {
            // Save items to local storage
            localStorage.setItem('items', JSON.stringify(this.items));
            // Save favorite items to local storage
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        addItem(items) {
            this.items.push(...items);
            this.saveItems();
        },
        addToFavorites(item) {
            this.favorites.push(item);
            this.saveItems();
        },
        removeFromFavorites(index) {
            this.favorites.splice(index, 1);
            this.saveItems();
        },
    },
});

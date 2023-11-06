<script>
import axios from "axios";
import Card                              from "../components/Card.vue";
import {defineComponent, onMounted, ref} from "vue";
import {useItemsStore}                   from "../stores/main.ts";


export default defineComponent({
  components: { Card },
  setup() {
    const store = useItemsStore();
    const items = ref([]); // Создаем реактивную ссылку

    onMounted(() => {
      loadItems(); // Загружаем данные из локального хранилища и с сервера
    });

    const loadItems = () => {
      // Загрузка данных из локального хранилища
      store.loadItems();

      axios
          .get('https://nekos.best/api/v2/neko?amount=20')
          .then((response) => {
            const fetchedItems = response.data.results;

            // Сравнение данных с данными из локального хранилища и добавление уникальных элементов
            const uniqueItems = mergeUniqueItems(fetchedItems, store.items);

            store.items = uniqueItems; // Обновляем данные в хранилище
            items.value = uniqueItems; // Обновляем реактивную ссылку
            // Сохранение данных в локальное хранилище
            store.saveItems();
          })
          .catch((error) => {
            console.error(error);
          });
    };

    const mergeUniqueItems = (newItems, existingItems) => {
      const seenUrls = new Set(existingItems.map((item) => item.url));
      const uniqueItems = existingItems.slice(); // Копируем существующие элементы

      for (const newItem of newItems) {
        if (!seenUrls.has(newItem.url)) {
          seenUrls.add(newItem.url); // Отмечаем URL как просмотренный
          uniqueItems.push(newItem);
        }
      }

      return uniqueItems;
    };

    return {
      items
    };
  },
});

</script>


<template>
  <header class="header">
    <!-- Your header content here -->
  </header>
  <section class="content__cards">
    <Card v-for="item in items" :key="item.url" :data="item" />
  </section>
</template>


<style scoped>
</style>

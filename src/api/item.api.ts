import instance from "./index";

export type ItemType = {
  id: string;
  title: string;
};

export const itemApi = {
  getItems() {
    return instance.get<Array<ItemType>>(`item`).then((response) => {
      return response.data;
    });
  },

  getItem(itemId: number) {
    return instance.get<ItemType>(`item/${itemId}`).then((response) => {
      return response.data;
    });
  },

  createItem(item: ItemType) {
    return instance.put<ItemType>(`item`, item).then((response) => {
      return response.data;
    });
  },

  saveItem(item: ItemType) {
    return instance
      .patch<ItemType>(`item/${item.id}`, item)
      .then((response) => {
        return response.data;
      });
  },

  removeItem(itemId: ItemType) {
    return instance.delete<ItemType>(`item/${itemId}`).then((response) => {
      return response.data;
    });
  },
};

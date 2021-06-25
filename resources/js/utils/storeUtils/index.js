import Vue from 'vue';

export const updateItem = (collection, predicate, newItem) => {
  const index = collection.findIndex(predicate);

  if (index >= 0) {
    Vue.set(collection, index, newItem);
  }
};

export const deleteItem = (collection, predicate) => {
  const index = collection.findIndex(predicate);

  if (index >= 0) {
    collection.splice(index, 1);
  }
};

export const deleteItems = (collection, predicate) => {
  let i = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (i === collection.length) {
      return;
    }

    if (predicate(collection[i])) {
      collection.splice(i, 1);
    }
    else {
      i++;
    }
  }
};


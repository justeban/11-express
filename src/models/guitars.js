'use stict';

import uuid from 'uuid/v4';
import storage from '../lib/storage/data-store.js';

class Guitar {

  constructor(record) {
    this.id = uuid();
    this.brand = record && record.brand || '';
    this.model = record && record.model || '';
    this.price = record && record.price || '';
  }

  static fetchAll() {
    return storage.fetchAll();
  }

  fetchOne(id) {
    return storage.fetchOne(id);
  }

  deleteOne(id) {
    return storage.delete(id);
  }

  save() {
    return storage.save(this);
  }

};

export default Guitar;
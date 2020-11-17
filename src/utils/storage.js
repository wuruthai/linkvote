class Storage {
  storeData(key, value) {
loca
  }

  async retrieveData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : value;
    } catch (error) {
      throw new Error('Can not read from storage');
    }
  }
}

const storage = new Storage()

export default storage;

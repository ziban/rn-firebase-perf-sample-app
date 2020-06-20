import firestore from '@react-native-firebase/firestore';

const getCountries = (countryUid) => {
  return firestore()
    .collection('countries')
    .get()
    .then((countries) => {
      return Promise.resolve(countries);
    });
};

const firebaseCalls = {
  getCountries,
};

export default firebaseCalls;

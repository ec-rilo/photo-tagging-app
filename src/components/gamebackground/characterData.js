import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase.config';

async function getQuery() {
  const q = query(collection(db, 'charLocations'));

  const querySnapshot = await getDocs(q);

  const charData = {};

  querySnapshot.forEach((doc) => {
    if (doc.id === '2000px') charData.largeScreenData = doc.data();
    if (doc.id === '1000px') charData.mediumScreenData = doc.data();
    if (doc.id === '900px') charData.smallScreenData = doc.data();
  });

  return charData;
}

async function getCharData(screenSize) {
  const charData = await getQuery();

  if (screenSize === 2000) {
    return charData.largeScreenData;
  } else if (screenSize === 1000) {
    return charData.mediumScreenData;
  } else if (screenSize === 900) {
    return charData.smallScreenData;
  }
}

export { getQuery, getCharData };

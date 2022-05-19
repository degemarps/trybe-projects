export default async function fetchAllCocktailsApi() {
  const request = await fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response = await request.json();
  return response;
}

// fetch by Filter
export async function fetchCocktailsApi({ searchText, filter }) {
  if (filter === 'ingredient') {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { drinks } = await request.json();
    return drinks === null ? [] : drinks;
  }
  if (filter === 'name') {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { drinks } = await request.json();
    return drinks === null ? [] : drinks;
  }
  if (filter === 'firstLetter') {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`);
    const { drinks } = await request.json();
    return drinks === null ? [] : drinks;
  }
}

// fetch by id
export async function fetchDrinksById(id) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const { drinks } = await request.json();
  return drinks;
}

// fetch by recomentation
export async function fetchDrinksRecomendation() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const { drinks } = await request.json();
  return drinks;
}

// fetch by all categories
export async function fetchDrinksCategories() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const { drinks } = await request.json();
  return drinks;
}

// fetch by categories
export async function fetchDrinksByCategories(category) {
  const request = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const { drinks } = await request.json();
  return drinks;
}

// fetch random drink

// export async function fetchRandomDrink() {
//   const request = fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//           const response = request.json();
//           return console.log(response);
// }

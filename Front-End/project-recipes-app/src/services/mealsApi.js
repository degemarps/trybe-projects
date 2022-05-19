// all fetch API
export default async function fetchAllMealsApi() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a');
  const { meals } = await request.json();
  return meals;
}

// fetch by ingredient
export async function fetchMealsIngredients(ing) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=${ing}`);
  const { meals } = await request.json();
  return meals;
}

// fetch ingredient image
export async function ingredientsImages(ingredient) {
  const request = await fetch(`https://www.themealdb.com/images/ingredients/${ingredient}.png`);
  const response = await request.json();
  return response;
}

// fetch by all categories
export async function fetchMealsCategories() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const { meals } = await request.json();
  return meals;
}

// fetch by categories
export async function fetchMealsByCategory(category) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const { meals } = await request.json();
  return meals;
}

// fetch by nacionalities
export async function fetchMealsNacionality() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const { meals } = await request.json();
  return meals;
}

// fetch by filter
export async function fetchMealsApi({ searchText, filter }) {
  if (filter === 'ingredient') {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`);
    const { meals } = await request.json();
    return meals === null ? [] : meals;
  }
  if (filter === 'name') {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    const { meals } = await request.json();
    return meals === null ? [] : meals;
  }
  if (filter === 'firstLetter') {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`);
    const { meals } = await request.json();
    return meals === null ? [] : meals;
  }
}

// fetch by recomendation
export async function fetchMealRecomendation() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const { meals } = await request.json();
  return meals;
}

// fetch meal by id
export async function fetchMealById(id) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const { meals } = await request.json();
  return meals;
}

// fetch ingredient list
export async function fetchMealsIngredientsList() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const { meals } = await request.json();
  return meals;
}

const rootElm = document.getElementById("areaSelector");

async function initAreaSelector() {
  await updatePref();
  await updateCity();
}

async function getPrefs() {
  const prefResponse = await fetch("./prefectures.json");
  return await prefResponse.json();
}

async function getCities(prefCode) {
  const cityResponse = await fetch("./cities/${prefCode}.json");
  return await cityResponse.json();
}

async function updatePref() {
  const prefs = await getPrefs();
  createPrefOptionHtml(prefs);
}

async function updateCity() {
  const prefSelectorElm = rootElm.querySelector(".prefectures");
  const cities = await getCities(prefSelectorElm.value);
  createCityOptionHtml(cities);
}

function createPrefOptionHtml(prefs) {
  const optionStrs = [];
  for (const pref of prefs) {
    optionStrs.push(`
      <option name="${pref.name}" value="${pref.code}">
        ${pref.name}
      </option>
    `);
  }
  const prefSelectorElm = rootElm.querySelector(".prefectures");
  prefSelectorElm.innerHTML = optionStrs.join("");
}

function createCityOptionHtml(cities) {
  const optionStrs = [];
  for (const city of cities) {
    optionStrs.push(`
        <option name="${city.name}" value="${city.code}">
          ${city.name}
        </option>
    `);
  }
  const citySelectorElm = rootElm.querySelector(".cities");
  citySelectorElm.innerHTML = optionStrs.join("");
}

initAreaSelector();

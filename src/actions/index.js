export const requestPeople = () => ({
  type: 'REQUEST_PEOPLE',
});

export const receivePeople = data => ({
  type: 'RECEIVE_PEOPLE',
  data,
});

export const fetchPeople = (page = 1) => {
  return dispatch => {
    dispatch(requestPeople());
    return fetch(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(json => dispatch(receivePeople(json)))
      .catch(err => dispatch(receivePeople({ results: [] })));
  };
};

export const clearPeople = () => ({
  type: 'CLEAR_PEOPLE',
});

export const clearPerson = () => ({
  type: 'CLEAR_PERSON',
});

export const requestPerson = () => ({
  type: 'REQUEST_PERSON',
});

export const receivePerson = (
  data,
  selectedFilmIndex,
  selectedSpeciesIndex,
  selectedVehicleIndex,
  selectedStarshipIndex
) => ({
  type: 'RECEIVE_PERSON',
  data,
  selectedFilmIndex,
  selectedSpeciesIndex,
  selectedVehicleIndex,
  selectedStarshipIndex,
});

export const fetchPerson = id => {
  return dispatch => {
    dispatch(requestPerson());
    return fetch(`https://swapi.co/api/people/${id}/`, { mode: 'cors' })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(new Error('Not found'));
      })
      .then(json => {
        const selectedFilmIndex = !!json.films.length ? 0 : null;
        const selectedSpeciesIndex = !!json.species.length ? 0 : null;
        const selectedVehicleIndex = !!json.vehicles.length ? 0 : null;
        const selectedStarshipIndex = !!json.starships.length ? 0 : null;
        dispatch(
          receivePerson(
            {
              name: json.name,
              height: json.height,
              mass: json.mass,
              hair_color: json.hair_color,
              skin_color: json.skin_color,
              eye_color: json.eye_color,
              birth_year: json.birth_year,
              gender: json.gender,
              films: json.films,
              species: json.species,
              vehicles: json.vehicles,
              starships: json.starships,
            },
            selectedFilmIndex,
            selectedSpeciesIndex,
            selectedVehicleIndex,
            selectedStarshipIndex
          )
        );

        dispatch(fetchPlanet(json.homeworld.split('/')[5]));

        if (json.films.length) {
          dispatch(fetchFilm(json.films[0].split('/')[5]));
        }
        if (json.species.length) {
          dispatch(fetchSpecies(json.species[0].split('/')[5]));
        }

        if (json.vehicles.length) {
          dispatch(fetchVehicle(json.vehicles[0].split('/')[5]));
        }

        if (json.starships.length) {
          dispatch(fetchStarship(json.starships[0].split('/')[5]));
        }
      })
      .catch(console.error);
  };
};

export const requestPlanet = () => ({
  type: 'REQUEST_PLANET',
});

export const receivePlanet = data => ({
  type: 'RECEIVE_PLANET',
  data,
});

export const fetchPlanet = id => {
  return dispatch => {
    dispatch(requestPlanet());
    return fetch(`https://swapi.co/api/planets/${id}/`, { mode: 'cors' })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(new Error('Not found'));
      })
      .then(json =>
        dispatch(
          receivePlanet({
            name: json.name,
            rotation_period: json.rotation_period,
            orbital_period: json.orbital_period,
            diameter: json.diameter,
            climate: json.climate,
            gravity: json.gravity,
            terrain: json.terrain,
            surface_water: json.surface_water,
            population: json.population,
          })
        )
      )
      .catch(err => dispatch(receivePlanet({})));
  };
};

export const requestFilm = () => ({
  type: 'REQUEST_FILM',
});

export const receiveFilm = data => ({
  type: 'RECEIVE_FILM',
  data,
});

export const fetchFilm = id => {
  return dispatch => {
    dispatch(requestFilm());
    return fetch(`https://swapi.co/api/films/${id}/`, { mode: 'cors' })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(new Error('Not found'));
      })
      .then(json =>
        dispatch(
          receiveFilm({
            title: json.title,
            episode_id: json.episode_id,
            opening_crawl: json.opening_crawl,
            director: json.director,
            producer: json.producer,
            release_date: json.release_date,
          })
        )
      )
      .catch(err => dispatch(receiveFilm({})));
  };
};

export const requestSpecies = () => ({
  type: 'REQUEST_SPECIES',
});

export const receiveSpecies = data => ({
  type: 'RECEIVE_SPECIES',
  data,
});

export const fetchSpecies = id => {
  return dispatch => {
    dispatch(requestSpecies());
    return fetch(`https://swapi.co/api/species/${id}/`, { mode: 'cors' })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(new Error('Not found'));
      })
      .then(json =>
        dispatch(
          receiveSpecies({
            name: json.name,
            classification: json.classification,
            designation: json.designation,
            average_height: json.average_height,
            skin_colors: json.skin_colors,
            hair_colors: json.hair_colors,
            eye_colors: json.eye_colors,
            average_lifespan: json.average_lifespan,
            language: json.language,
          })
        )
      )
      .catch(err => dispatch(receiveSpecies({})));
  };
};

export const requestVehicle = () => ({
  type: 'REQUEST_VEHICLE',
});

export const receiveVehicle = data => ({
  type: 'RECEIVE_VEHICLE',
  data,
});

export const fetchVehicle = id => {
  return dispatch => {
    dispatch(requestVehicle());
    return fetch(`https://swapi.co/api/vehicles/${id}/`, { mode: 'cors' })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(new Error('Not found'));
      })
      .then(json =>
        dispatch(
          receiveVehicle({
            name: json.name,
            model: json.model,
            manufacturer: json.manufacturer,
            cost_in_credits: json.cost_in_credits,
            length: json.length,
            max_atmosphering_speed: json.max_atmosphering_speed,
            crew: json.crew,
            passengers: json.passengers,
            cargo_capacity: json.cargo_capacity,
            consumables: json.consumables,
            vehicle_class: json.vehicle_class,
          })
        )
      )
      .catch(err => dispatch(receiveVehicle({})));
  };
};

export const requestStarship = () => ({
  type: 'REQUEST_STARSHIP',
});

export const receiveStarship = data => ({
  type: 'RECEIVE_STARSHIP',
  data,
});

export const fetchStarship = id => {
  return dispatch => {
    dispatch(requestStarship());
    return fetch(`https://swapi.co/api/starships/${id}/`, { mode: 'cors' })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(new Error('Not found'));
      })
      .then(json =>
        dispatch(
          receiveStarship({
            name: json.name,
            model: json.model,
            manufacturer: json.manufacturer,
            cost_in_credits: json.cost_in_credits,
            length: json.length,
            max_atmosphering_speed: json.max_atmosphering_speed,
            crew: json.crew,
            passengers: json.passengers,
            cargo_capacity: json.cargo_capacity,
            consumables: json.consumables,
            hyperdrive_rating: json.hyperdrive_rating,
            MGLT: json.MGLT,
            starship_class: json.starship_class,
          })
        )
      )
      .catch(err => dispatch(receiveStarship({})));
  };
};

export const changeIndex = (entity, index) => ({
  type: `CHANGE_${entity.toUpperCase()}_INDEX`,
  index,
});

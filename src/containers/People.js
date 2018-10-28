import React from 'react';
import { connect } from 'react-redux';
import { CardColumns, Col, Container, Row } from 'reactstrap';
import {
  changeIndex,
  fetchFilm,
  fetchPerson,
  fetchSpecies,
  fetchVehicle,
  fetchStarship,
  clearPerson,
} from './../actions';
import CardDesc from './../components/CardDesc';
import CardItem from './../components/CardItem';
import TopNav from './../components/TopNav';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'First',
    };
    // this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPerson(match.params.id));
    setInterval(() => {
      this.setState({ name: 'Last' });
    }, 5000);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearPerson());
  }

  componentDidUpdate(prevProps) {
    const {
      dispatch,
      selectedFilmIndex,
      selectedSpeciesIndex,
      selectedVehicleIndex,
      selectedStarshipIndex,
      person: { films, species, vehicles, starships },
    } = this.props;

    if (selectedFilmIndex !== prevProps.selectedFilmIndex)
      dispatch(fetchFilm(films[selectedFilmIndex].split('/')[5]));

    if (selectedSpeciesIndex !== prevProps.selectedSpeciesIndex)
      dispatch(fetchSpecies(species[selectedSpeciesIndex].split('/')[5]));

    if (selectedVehicleIndex !== prevProps.selectedVehicleIndex)
      dispatch(fetchVehicle(vehicles[selectedVehicleIndex].split('/')[5]));

    if (selectedStarshipIndex !== prevProps.selectedStarshipIndex)
      dispatch(fetchStarship(starships[selectedStarshipIndex].split('/')[5]));
  }

  handleIndexChange(type, index) {
    const { dispatch } = this.props;
    dispatch(changeIndex(type, index));
  }

  render() {
    const {
      isPersonFetching,
      isPlanetFetching,
      isFilmFetching,
      isSpeciesFetching,
      isVehicleFetching,
      isStarshipFetching,
      person,
      planet,
      film,
      species,
      vehicle,
      starship,
      selectedSpeciesIndex,
      selectedFilmIndex,
      selectedVehicleIndex,
      selectedStarshipIndex,
    } = this.props;

    return (
      <React.Fragment>
        <TopNav />
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <h1>{this.state.name}</h1>
            </Col>
            <Col sm="12">
              <Row>
                <CardColumns style={{ marginBottom: '1rem' }}>
                  <CardItem
                    name="profile"
                    // isLoading={isPersonFetching}
                    data={[]}
                  />
                  <CardItem
                    name="homeworld"
                    // isLoading={isPersonFetching || isPlanetFetching}
                    data={[]}
                  />
                  <CardDesc
                    name="films"
                    isLoading={isPersonFetching || isFilmFetching}
                    data={film}
                    selectedIndex={selectedFilmIndex}
                    length={person.films && person.films.length}
                    handleIndexChange={this.handleIndexChange.bind(this)}
                    // handleIndexChange={this.handleIndexChange}
                  />
                </CardColumns>
                <CardColumns>
                  <CardItem
                    name="species"
                    isLoading={isPersonFetching || isSpeciesFetching}
                    data={species}
                    selectedIndex={selectedSpeciesIndex}
                    length={person.species && person.species.length}
                    handleIndexChange={this.handleIndexChange.bind(this)}
                    // handleIndexChange={this.handleIndexChange}
                  />
                  <CardItem
                    name="vehicles"
                    isLoading={isPersonFetching || isVehicleFetching}
                    data={vehicle}
                    selectedIndex={selectedVehicleIndex}
                    length={person.vehicles && person.vehicles.length}
                    handleIndexChange={this.handleIndexChange.bind(this)}
                    // handleIndexChange={this.handleIndexChange}
                  />
                  <CardItem
                    name="starships"
                    isLoading={isPersonFetching || isStarshipFetching}
                    data={starship}
                    selectedIndex={selectedStarshipIndex}
                    length={person.starships && person.starships.length}
                    handleIndexChange={this.handleIndexChange.bind(this)}
                    // handleIndexChange={this.handleIndexChange}
                  />
                </CardColumns>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isPersonFetching: state.person.isFetching,
  isPlanetFetching: state.planet.isFetching,
  isFilmFetching: state.film.isFetching,
  isSpeciesFetching: state.species.isFetching,
  isVehicleFetching: state.vehicle.isFetching,
  isStarshipFetching: state.starship.isFetching,

  person: state.person.data,
  planet: state.planet.data,
  film: state.film.data,
  species: state.species.data,
  vehicle: state.vehicle.data,
  starship: state.starship.data,

  selectedFilmIndex: state.person.selectedFilmIndex,
  selectedSpeciesIndex: state.person.selectedSpeciesIndex,
  selectedVehicleIndex: state.person.selectedVehicleIndex,
  selectedStarshipIndex: state.person.selectedStarshipIndex,
});

export default connect(mapStateToProps)(People);

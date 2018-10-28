import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from 'reactstrap';
import Empty from '../components/Empty';
import { clearPeople, fetchPeople } from './../actions';
import Loading from './../components/Loading';
import TopNav from './../components/TopNav';

class Home extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPeople(this.getCurrentPage()));
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearPeople());
  }
  componentDidUpdate(prevProps) {
    const { dispatch, location } = this.props;
    if (
      queryString.parse(location.search).page !==
      queryString.parse(prevProps.location.search).page
    )
      dispatch(fetchPeople(this.getCurrentPage()));
  }

  getCurrentPage() {
    const { location } = this.props;
    return queryString.parse(location.search).page || 1;
  }

  getLastUrlPath(url) {
    return url.split('/')[5];
  }

  isPaginationDisabled(type) {
    const { isFetching, pagination } = this.props;
    if (isFetching) return true;
    if (type === 'next' && pagination.next) return false;
    if (type === 'previous' && pagination.previous) return false;
    return true;
  }

  render() {
    const { data, pagination, isFetching } = this.props;

    return (
      <React.Fragment>
        <TopNav />
        <Container>
          <h1>Star Wars People</h1>
          <Row>
            <Col sm="12">
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Birth</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {isFetching && (
                      <td colSpan="5">
                        <Loading />
                      </td>
                    )}
                    {!isFetching &&
                      !data.length && (
                        <td colSpan="5">
                          <Empty />
                        </td>
                      )}
                  </tr>
                  {!isFetching &&
                    data.map((v, i) => (
                      <tr key={i}>
                        <th scope="row">{this.getLastUrlPath(v.url)}</th>
                        <td>{v.name}</td>
                        <td>{v.birth_year}</td>
                        <td>{v.gender}</td>
                        <td>
                          <Link to={`/people/${this.getLastUrlPath(v.url)}`}>
                            <Button color="primary" size="sm">
                              View
                            </Button>{' '}
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              {!!data.length && (
                <Pagination
                  style={{ float: 'right' }}
                  size="sm"
                  aria-label="Page navigation example">
                  <PaginationItem
                    disabled={this.isPaginationDisabled('previous')}>
                    <PaginationLink
                      previous
                      onClick={e => {
                        this.props.history.push(
                          `/?page=${+this.getCurrentPage() - 1}`
                        );
                      }}>
                      &#171;
                      {` Previous`}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem disabled>
                    <PaginationLink href="#">{`${this.getCurrentPage()} of ${Math.round(
                      pagination.count / 10
                    )}`}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem disabled={this.isPaginationDisabled('next')}>
                    <PaginationLink
                      next
                      onClick={e => {
                        this.props.history.push(
                          `/?page=${+this.getCurrentPage() + 1}`
                        );
                      }}>
                      {`Next `}
                      &#187;
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              )}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.people.isFetching,
  pagination: state.people.pagination,
  data: state.people.data,
});
export default connect(mapStateToProps)(Home);

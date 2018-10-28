import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import CardPagination from './CardPagination';
import Empty from './Empty';
import Loading from './Loading';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(`Card Item ${this.props.name}`);
    return (
      <Card>
        <CardHeader>{this.props.name.toUpperCase()}</CardHeader>
        <CardBody style={{ minHeight: '300px' }}>
          {this.props.isLoading && <Loading />}
          {!this.props.isLoading &&
            !Object.keys(this.props.data).length && <Empty />}
          {!this.props.isLoading && (
            <React.Fragment>
              <Form>
                {Object.keys(this.props.data)
                  .filter(v => !Array.isArray(this.props.data[v]))
                  .map(v => (
                    <FormGroup key={v} row>
                      <Label sm={5}>
                        {v
                          .replace(/_/g, ' ')
                          .replace(/(^| )(\w)/g, c => ` ${c.toUpperCase()}`)}
                      </Label>
                      <Col sm={7}>
                        <Input
                          bsSize="sm"
                          value={this.props.data[v]}
                          readOnly
                        />
                      </Col>
                    </FormGroup>
                  ))}
              </Form>
              {!!this.props.length && (
                <CardPagination
                  selectedIndex={this.props.selectedIndex}
                  length={this.props.length}
                  type={this.props.name}
                  handleIndexChange={this.props.handleIndexChange}
                />
              )}
            </React.Fragment>
          )}
        </CardBody>
      </Card>
    );
  }
}

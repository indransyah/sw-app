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

export default function CardItem(props) {
  return (
    <Card>
      <CardHeader>{props.name.toUpperCase()}</CardHeader>
      <CardBody style={{ minHeight: '300px' }}>
        {props.isLoading && <Loading />}
        {!props.isLoading && !Object.keys(props.data).length && <Empty />}
        {!props.isLoading && (
          <React.Fragment>
            <Form>
              {Object.keys(props.data)
                .filter(v => !Array.isArray(props.data[v]))
                .map(v => (
                  <FormGroup key={v} row>
                    <Label sm={5}>
                      {v
                        .replace(/_/g, ' ')
                        .replace(/(^| )(\w)/g, c => ` ${c.toUpperCase()}`)}
                    </Label>
                    <Col sm={7}>
                      <Input bsSize="sm" value={props.data[v]} readOnly />
                    </Col>
                  </FormGroup>
                ))}
            </Form>
            {!!props.length && (
              <CardPagination
                selectedIndex={props.selectedIndex}
                length={props.length}
                type={props.name}
                handleIndexChange={props.handleIndexChange}
              />
            )}
          </React.Fragment>
        )}
      </CardBody>
    </Card>
  );
}

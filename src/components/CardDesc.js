import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import CardPagination from './CardPagination';
import Empty from './Empty';
import Loading from './Loading';

export default function CardDesc(props) {
  return (
    <Card>
      <CardHeader>{props.name.toUpperCase()}</CardHeader>
      <CardBody style={{ minHeight: '300px' }}>
        {props.isLoading && <Loading />}
        {!props.isLoading && !Object.keys(props.data).length && <Empty />}
        {!props.isLoading &&
          Object.keys(props.data).length > 0 && (
            <React.Fragment>
              <CardTitle>
                {props.data.title} | {props.data.release_date}
              </CardTitle>
              <CardSubtitle>
                {props.data.director} | {props.data.producer}
              </CardSubtitle>
              <CardText>{props.data.opening_crawl}</CardText>
              {!!length && (
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

import React from 'react';
import { FormattedDate } from 'react-intl';

const Time = (props) => {
  return (
    <time {...props} dateTime={props.date}>
      <FormattedDate
        value={new Date(props.date)}
        month="long"
        day="numeric"
        year="numeric"
      />
    </time>
  );
}

export default Time;

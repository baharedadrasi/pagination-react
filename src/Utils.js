import React from 'react';

const paginate = (data) => {
  const itemPerPage = 10;
  const pages = Math.ceil(data.length / itemPerPage);

  const newData = Array.from({ length: pages }, (_, index) => {
    let start = index * itemPerPage;
    return data.slice(start, itemPerPage + start);
  });

  return newData;
};

export default paginate;

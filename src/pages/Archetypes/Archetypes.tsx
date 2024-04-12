import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getArchetypes,
  getFetchStatus,
  getArchetypeState,
} from '@Redux/reducers/archetypes-slice';

const Archetypes = () => {
  const archetypeStatus = useSelector(getFetchStatus);
  useSelector((state) => {
    console.log('state ', state);
  });
  return <main className="">TESTING</main>;
};

export default Archetypes;

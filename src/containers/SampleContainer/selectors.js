import { createSelector } from 'reselect';

const selectSampleDomain = () => state => state.get('sampleState');

const selectData = () => createSelector(
  selectSampleDomain(),
  (sampleState) => sampleState.get('data')
);

export { selectData };
import {combineReducers} from 'redux';
import stationList from './stationList';
import activeStation from './activeStation';
import primaryQuery from './primaryQuery';
import gifList from './gifList';
import activeGif from './activeGif';
import controlPanel from './controlPanel';

export default combineReducers({
  stationList,
  activeStation,
  primaryQuery,
  gifList,
  activeGif,
  controlPanel,
});
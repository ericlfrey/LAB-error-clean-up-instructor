import header from '../components/header';
import htmlStructure from '../components/htmlStructure';
import startSortingBtn from '../components/startSortingBtn';
import events from './events';

const startApp = () => {
  htmlStructure();
  header();
  startSortingBtn();
  events();
};

export default startApp;

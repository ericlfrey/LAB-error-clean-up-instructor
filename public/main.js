import header from '../components/header';
import htmlStructure from '../components/htmlStructure';
import startSortingBtn from '../components/startSortingBtn';
import events from '../utils/events';
import '../styles/main.scss';

const startApp = () => {
  htmlStructure();
  header();
  startSortingBtn();
  events();
};

startApp();

import './App.css';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';
import { data } from './utils/mock';

const App = () => {
  return (
    <>
      <Navbar />
      <SearchArea videos={data} />
    </>
  );
};

export default App;
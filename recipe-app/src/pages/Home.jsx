import SearchBar from "../components/Searchbar";
import onSearch from "../Functions/search";


const Home = () => {

  return (
    <div className="bg-(--primary-color) flex min-h-screen">
      <div
        className={`flex-1 transition-all duration-300 ease-in-out rounded-sm-r`}
      >
        <div className="p-8">
          <header className="bg-(--primary-color-dark) p-4 rounded-sm">
            <h1 className="text-3xl font-bold">
              <p className="text-center text-(--t-color)">Welcome to the Recipe Converter!</p>
              <SearchBar  Text="Put your URL here" onSearch={onSearch} className="text-center bg-(--secondary-color) p-4 rounded-lg"></SearchBar>
            </h1>
          </header>
          <main className="p-4">
            <p>Output recipe here</p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
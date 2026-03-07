import SearchBar from "../components/Searchbar";


const Home = () => {

  return (
    <div className="flex min-h-screen">
      <div
        className={`flex-1 transition-all duration-300 ease-in-out rounded-sm-r`}
      >
        <div className="p-8">
          <header className="bg-primary p-4 rounded-sm">
            <h1 className="text-3xl font-bold">
              <p className="text-secondary">Hi!</p>
              <SearchBar>Type text here</SearchBar>
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
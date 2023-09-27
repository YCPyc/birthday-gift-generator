import '../css/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="h-full pt-24 max-w-5xl mx-auto text-center">
        <h1 className="text-brand-primary text-6xl">
          Find the perfect gift for any friend or family through the power of AI
        </h1>
        <p className="mt-6 text-lg text-brand-secondary max-w-2xl mx-auto">
          Input some info about the recipient of the gift. Such as hobbies, interests, age, and gender. Add any additional prompt to customize the gift as much as possible
        </p>
      </div>
    </div>
  );
}

export default Home;

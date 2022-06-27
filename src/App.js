import { useEffect, useState } from 'react';
import Follower from './Follower';
import { useFetch } from './useFetch';

function App() {
  const { loading, data } = useFetch();
  const [currentPage, setCurrentPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[currentPage]);
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return <Follower key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

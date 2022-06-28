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
  }, [loading, currentPage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const changePage = (type) => {
    setCurrentPage((oldPage) => {
      if (type === 'next') {
        if (currentPage >= data.length - 1) {
          return 0;
        }
        return oldPage + 1;
      }
      if (type === 'prev') {
        if (currentPage === 0) {
          return data.length - 1;
        }
        return oldPage - 1;
      }
    });
    scrollToTop();
  };

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
        <div className="btn-container">
          <button className="prev-btn" onClick={() => changePage('prev')}>
            prev
          </button>
          {data.map((_, index) => {
            return (
              <button
                className={
                  currentPage === index ? 'page-btn active-btn' : 'page-btn'
                }
                key={index}
                onClick={() => {
                  setCurrentPage(index);
                  scrollToTop();
                }}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={() => changePage('next')}>
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

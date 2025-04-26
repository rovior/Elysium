import { useEffect, useState, useRef } from 'react';
import styles from './Carousel.module.css';

import icon from '../../img/right_chevron_icon.png'; // verifique se o caminho está correto


function Carousel() {
  const [data, setData] = useState([]);
  const carouselRef = useRef(null);
  const itemRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5002/servicos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          setData(data); // usando corretamente o estado 'data'
        })
        .catch(err => console.log(err));
    });
  }, []);

  const handleRightClick = (e) => {
    e.preventDefault();
    if (carouselRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth + 16; 
      const newIndex = Math.min(currentIndex + 1, data.length - 1);
      carouselRef.current.scrollTo({
        left: itemWidth * newIndex,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };
  
  const handleLeftClick = (e) => {
    e.preventDefault();
    if (carouselRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth + 16;
      const newIndex = Math.max(currentIndex - 1, 0);
      carouselRef.current.scrollTo({
        left: itemWidth * newIndex,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };

  if (!data || !data.length) return null;

  return (
    <div className={styles.container}>
      
      <div className={styles.carousel} ref={carouselRef}>
        {data.map((item, index) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className={styles.items} 
                 key={id}
                 ref={index === 0 ? itemRef : null}
                 >
              <div className={styles.image}>
                <img src={image} alt={name} />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <span className={styles.oldPrice}>U$ {oldPrice}</span>
                <span className={styles.price}>U$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleLeftClick}>
          <img src={icon} alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src={icon} alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;

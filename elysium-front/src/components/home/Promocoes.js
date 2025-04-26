import image1 from '../../img/card.png';
import styles from './Promocoes.module.css'; // caso você esteja usando CSS Modules

function Promocoes() {
  return (
    <div className={styles.container}>
      {[image1, image1, image1, image1, image1].map((img, i) => (
        <div key={i} className={styles.element}>
          <img src={img} alt={`image${i + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Promocoes;

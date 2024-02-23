import { RECOMMEND_KEYWORDS_DATA } from '@data/ConstantData';
import Button from '@components/Button/Button';
import './RecommendKeywords.scss';

const RecommendKeywords = () => {
  return (
    <section className="recommend-keywords-section">
      <h3>추천 키워드</h3>
      <ul className="recommend-keywords-list">
        {RECOMMEND_KEYWORDS_DATA.map(({ query, queryType }, index) => {
          return (
            <li key={index}>
              <Button size="small" color="grayscale" content={query} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecommendKeywords;

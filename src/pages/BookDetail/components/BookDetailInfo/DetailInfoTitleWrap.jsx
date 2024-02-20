import DetailBadge from './DetailBadge';

const DetailInfoTitleWrap = ({ aladinData, data }) => {
  return (
    <div className="book-detail-info-title-wrap">
      <DetailBadge data={data} />
      <span className="book-detail-info-category">
        {aladinData.categoryName}
      </span>
      <h2 className="book-detail-info-title">{aladinData.title}</h2>
      <span className="book-detail-info-author">
        {aladinData.author} | {aladinData.publisher}
      </span>
      <span className="book-detail-info-standard-price">
        정가 : {aladinData.priceStandard.toLocaleString()}원
      </span>
      <span className="book-detail-info-sales-price">
        판매가 : {aladinData.priceSales.toLocaleString()}원
      </span>
    </div>
  );
};

export default DetailInfoTitleWrap;

const DetailInfoEvalWrap = ({ data }) => {
  // Intl 객체를 이용하여 만 이상의 숫자를 2만과 같이 표현
  const compactNumberFormatter = new Intl.NumberFormat('ko', {
    notation: 'compact',
  });

  const compactNumber = num => {
    return compactNumberFormatter.format(num);
  };
  return (
    <div className="book-detail-info-eval-wrap">
      <span>조회수 {compactNumber(data.views)}</span>
      <span>관심작품 {compactNumber(data.interests)}</span>
      <span>별점 {data.totalRating}</span>
      <span>댓글 {data.totalComments.toLocaleString()}</span>
    </div>
  );
};

export default DetailInfoEvalWrap;

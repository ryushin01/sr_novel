const DetailInfoEvalWrap = ({ data }) => {
  return (
    <div className="book-detail-info-eval-wrap">
      <span>조회수 {data.views.toLocaleString()}</span>
      <span>관심작품 {data.interests.toLocaleString()}</span>
      <span>별점 {data.totalRating}</span>
      <span>댓글 {data.totalComments.toLocaleString()}</span>
    </div>
  );
};

export default DetailInfoEvalWrap;

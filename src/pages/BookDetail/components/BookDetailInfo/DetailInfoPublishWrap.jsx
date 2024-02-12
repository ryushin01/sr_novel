const DetailInfoPublishWrap = ({ data }) => {
  return (
    <div className="book-detail-info-publish-wrap">
      <span>{data.genre}</span>
      <span>{data.age}</span>
      <span>총 {data.chapters}화</span>
      <span>{data.chapterFee}화 무료</span>
      <span>
        {data.payChapters}화 유료 (정가/판매가 회당
        {data.chapterFee}원)
      </span>
    </div>
  );
};

export default DetailInfoPublishWrap;

import DetailInfoTitleWrap from '../../BookDetailInfo/DetailInfoTitleWrap';
import DetailInfoPublishWrap from '../../BookDetailInfo/DetailInfoPublishWrap';
import DetailInfoEvalWrap from '../../BookDetailInfo/DetailInfoEvalWrap';
import DetailInfoDescription from '../../BookDetailInfo/DetailInfoDescription';
import DetailInfoHashtag from '../../BookDetailInfo/DetailInfoHashtag';

const BookDetailInfoWrap = ({
  bookDetailData,
  descriptionToggle,
  handleDescriptionToggle,
  aladinData,
}) => {
  return bookDetailData.map(data => {
    return (
      <div className="book-detail-info-text" key={data.interests}>
        <DetailInfoTitleWrap aladinData={aladinData} data={data} />
        <DetailInfoPublishWrap data={data} />
        <DetailInfoEvalWrap data={data} />
        <DetailInfoDescription
          descriptionToggle={descriptionToggle}
          handleDescriptionToggle={handleDescriptionToggle}
          aladinData={aladinData}
        />
        <DetailInfoHashtag data={data} />
      </div>
    );
  });
};

export default BookDetailInfoWrap;

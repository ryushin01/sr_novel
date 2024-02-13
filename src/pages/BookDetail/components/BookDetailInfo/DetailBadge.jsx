import BadgeGroup from '@components/BadgeGroup/BadgeGroup';

const DetailBadge = ({ data }) => {
  return (
    <div className="book-detail-info-badge">
      <BadgeGroup contents={data.badge.join(', ')} />
    </div>
  );
};

export default DetailBadge;

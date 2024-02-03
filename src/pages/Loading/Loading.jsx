import Lottie from 'lottie-react';
import loading from '../../lottie/DataLoading.json';
import './Loading.scss';

const Loading = () => {
  return (
    <section className="loadingContainer">
      <Lottie animationData={loading} />
    </section>
  );
};

export default Loading;

import { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const [bookIsbn, setBookIsbn] = useState('');

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Book Detail</h1>
    </div>
  );
};

export default BookDetail;

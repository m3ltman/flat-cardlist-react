import axios from 'axios';

const changeLike = (id, like) => {
  axios.patch(`http://localhost:3000/flats/${id}`, {
    like,
  })
  .then(res => res)
  .catch(err => console.error(err.message));
};

export default changeLike;
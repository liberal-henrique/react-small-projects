import React, { useRef } from 'react';
import './AddMovie.css';

export default function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    //add in APP
    props.onAddMovie(movie);
  }
  return(
    <form onSubmit={submitHandler}>
      <div className='control'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef}/>
      </div>
      <div className='control'>
        <label>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className='control'>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef}/>
      </div>
      <button className='btn-add'>Add Movie</button>
    </form>
  );
}

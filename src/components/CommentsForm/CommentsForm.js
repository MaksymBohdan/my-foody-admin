import React, { Fragment } from 'react';

const CommentsForm = ({ onChange, onSubmit, value, commentsList }) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <textarea cols="60" rows="10" onChange={onChange} value={value} />
        <ul>
          {commentsList.map(({ content }) => (
            <li key={content}>{content}</li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default CommentsForm;

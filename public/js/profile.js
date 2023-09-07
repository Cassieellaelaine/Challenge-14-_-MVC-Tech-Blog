const newFormHandler = async (event) => {
  event.preventDefault();

  const postName = document.querySelector('#post-name').value.trim();
  const postRanking = document.querySelector('#post-ranking').value.trim();
   const postDescription = document.querySelector('#post-desc').value.trim();

  if (postName && postDescription) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ postName, postRanking, postDescription }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Could NOT create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Could NOT delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

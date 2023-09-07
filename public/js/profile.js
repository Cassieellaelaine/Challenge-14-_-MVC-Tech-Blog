const newFormHandler = async (event) => {
  event.preventDefault();

  const postName = document.querySelector('#post-name').value.trim()
  const postRanking = document.querySelector('#post-ranking').value.trim()
  const postDescription = document.querySelector('#post-desc').value.trim()

  console.log(postName, postRanking, postDescription)

  if (postName && postRanking && postDescription) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({name:postName, post_ranking:postRanking, description:postDescription }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
    document.location.reload();
    } else {
      alert('Could NOT create post');
    }
  }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);



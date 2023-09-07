const newFormHandler = async (event) => {
  event.preventDefault();

  const postName = document.querySelector('#post-name').value.trim()
  const postRanking = document.querySelector('#post-ranking').value.trim()
  const postDescription = document.querySelector('#post-desc').innerText.trim()

  console.log(postName, postRanking, postDescription)

  if (postName && postRanking && postDescription) {
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

document
  .querySelector('#submit-btn')
  .addEventListener('submit', newFormHandler);



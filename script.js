let currentUser = '';
let storyVotes = 0;
let userContributions = [];
let comments = [];

function addStory() {
  const storyInput = document.getElementById('storyInput');
  const storyContainer = document.getElementById('story');
  const newSentence = storyInput.value;

  if (newSentence.trim() !== '') {
    const storySegment = document.createElement('p');
    storySegment.className = 'story-segment';
    storySegment.textContent = newSentence;
    storyContainer.appendChild(storySegment);
    userContributions.push(newSentence);
    storyInput.value = '';
  }
}

function addComment() {
  const commentInput = document.getElementById('commentInput');
  const newComment = commentInput.value;

  if (newComment.trim() !== '') {
    comments.push(newComment);
    commentInput.value = '';
    alert('Comment added: ' + newComment);
  }
}

function voteStory() {
  storyVotes++;
  alert('Thanks for voting! Total votes: ' + storyVotes);
}

function showProfile() {
  if (currentUser !== '') {
    alert('User Profile: ' + currentUser + '\nContributions: ' + userContributions.join('\n'));
  } else {
    alert('Please log in to view your profile.');
  }
}

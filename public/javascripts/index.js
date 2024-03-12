const inputs = document.querySelectorAll('.writeInputs');
const uploadImage = document.querySelector('.uploadImage');

function publishPost() {

  const post = getInputsValue();

  if (validFormData(post)) {
    createPost(post);
    clearInputs();
  } else {
    console.log('Post is undefined');
    return;
  }
}

function getInputsValue() {
  let post = new FormData();
  post.append('image', uploadImage.files[0]);
  inputs.forEach(input => {
    if (input.value) {
      post.append(input.name, input.value);
    } else {
      post = {};
      console.error('Write all inputs!');
      return post;
    }
  });
  post.append('author', 'Glak Gevorgyan')
  return post;
}
function clearInputs() {
  inputs.forEach(input => input.name !== 'accessModifier' ? input.value = '' : input.value = 'open');
  uploadImage.value = '';
}

function validFormData(formData) {

  for (const value of formData.values()) {
    if (value === 'undefined') {
      return false;
    }
  }
  return true;
}
const cv = {
  userInfo: {
    name: 'Amirreza Sobhdel',
    email: 'amirreza@test.com',
    phoneNumber: '09123456789',
    summary:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
  },
  researchInterests: [
    'Natural Language Processing',
    'Computer Vision',
    'Audio Signal Processing',
    'Reinforcement Learning',
  ],
  education: [
    {
      logo: './assets/img/urmiaUnivercity.svg',
    },
  ],
};

function renderSeparators() {
  [...$('divider')].map((divider) =>
    $(divider).replaceWith(`<div class="sep">
    <h4 class="sep-title">${$(divider).attr('data-title')}</h4>
    <div class="sep-line"></div>
  </div>`)
  );
}

$(document).ready(function () {
  $('#name').html(cv.userInfo.name);
  // $('#email').html(cv.userInfo.email);
  // $('#phoneNumber').html(cv.userInfo.phoneNumber);
  $('#summary').html(cv.userInfo.summary);
  $('#researchInterests').html(cv.researchInterests.join(', '));
  renderSeparators();
});

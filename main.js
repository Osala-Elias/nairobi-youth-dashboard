const programs = [
  {
    title: "Youth Coding Bootcamp",
    desc: "Learn coding, web development, and software skills for free in Nairobi. Open to youth aged 18-30."
  },
  {
    title: "Sports Outreach Initiative",
    desc: "Engage in sports events organized to promote teamwork, fitness, and community development."
  },
  {
    title: "Entrepreneurship Workshop",
    desc: "Training youth on business ideas, startups, and entrepreneurial skills in Nairobi."
  }
];

function showDetails(index) {
  document.getElementById('programs').classList.add('hidden');
  document.getElementById('details').classList.remove('hidden');
  document.getElementById('detail-title').textContent = programs[index].title;
  document.getElementById('detail-desc').textContent = programs[index].desc;
}

function closeDetails() {
  document.getElementById('details').classList.add('hidden');
  document.getElementById('programs').classList.remove('hidden');
}

// Feedback form
const form = document.getElementById('feedback-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const output = document.getElementById('feedback-output');
  const p = document.createElement('p');
  p.textContent = `${name} says: ${comment}`;
  output.appendChild(p);
  form.reset();
});

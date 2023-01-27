// local reviews data
const reviews = [
    {
      id: 1,
      name: "ada gold",
      job: "content writer",
      img:
        "./assets/ada.jpg",
      text:
        "Particularly in light of recent times, STEP helped better prepare me to make the switch to tech. I feel comfortable in the place that I am after taking the training and look forward to integrating my new learning experiences.",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "UI/UX designer",
      img:
        "./assets/hannah.jpg",
      text:
        "Without a doubt, the COVID-19 pandemic has profoundly affected the world we live in. While there are some things that will fall through the cracks, one of those things should not be the education of our future. I found with the experience I received from STEP educative as it uniquely positioned to deal with this unprecedented situation.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "graphic Designer",
      img:
        "./assets/David.jpg",
      text:
        "At STEP, I had a phenomenal time, and I always give it my highest recommendation. I couldn’t afford to start at a large, but at STEP, I received a the best training and I had a terrific educational experience.",
    },
    {
      id: 4,
      name: "Solomon Achugwoh",
      job: "web developer",
      img:
        "./assets/solo.jpg",
      text:
        "When I talk to friends who began their tech journey, I see that STEP has given me the same quality of education but with much smaller class sizes. And I like the idea that I’m not drowning in debt. STEP is a great place to get your foundation because it’s a quality education for an affordable price. ",
    },
  ];
  
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial items
  window.addEventListener('DOMContentLoaded', function(e) {
    showPerson();
  });
  
  // show person based on items
  function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next showPerson
  nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    }
    showPerson();
  });
  
  // show prev showPerson
  prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length - 1;
    }
    showPerson();
  });
  
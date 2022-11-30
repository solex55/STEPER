// local reviews data
const reviews = [
    {
      id: 1,
      name: "ada gold",
      job: "content writer",
      img:
        "./assets/ada.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "UI/UX designer",
      img:
        "./assets/hannah.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "graphic Designer",
      img:
        "./assets/David.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Solomon anderson",
      job: "web developer",
      img:
        "./assets/solo.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
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
  
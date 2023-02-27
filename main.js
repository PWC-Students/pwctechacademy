// type.js library

const typed1 = new Typed(".type-animation1", {
  strings: [
    "Teach and Inspire ^2000",
    "Become an Instructor ^2000",
    "Join PWCTechademy ^2000",
  ],
  typeSpeed: 30,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  backSpeed: 20,
  cursorChar: "|",
  shuffle: false,
});

const typed2 = new Typed(".type-animation2", {
  strings: [
    "Teach and Inspire ^2000",
    "Become an Instructor ^2000",
    "Join PWCTechademy ^2000",
  ],
  typeSpeed: 30,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  backSpeed: 20,
  cursorChar: "|",
  shuffle: false,
});

let careerData = [
  {
    category: "Business Development & Partnerships",
    positions: [
      { id: "1", position: "Senior Director, EMEA Costumer Success" },
    ],

    id: "item1",
  },
  {
    category: "Customer Success",
    positions: [{ id: "1", position: "Director of Analyst Relations" }],
    id: "item2",
  },
  {
    category: "Data",
    positions: [{ id: "1", position: "Senior Data Scientist" }],
    id: "item3",
  },
  {
    category: "Engineering",
    positions: [{ id: "1", position: "Security and Compliance Manager" }],
    id: "item4",
  },
  {
    category: "Finance",
    positions: [
      { id: "1", position: "Director, Tax" },
      { id: "2", position: "International Payroll Analyst" },
      { id: "3", position: "Senior Accounting Manager" },
      { id: "4", position: "Senior SOX Analyst, Business Process" },
    ],
    id: "item5",
  },
  {
    category: "New Ventures",
    positions: [
      { id: "1", position: "Partner Operations Associate" },
      { id: "2", position: "Partner Operations Manager" },
    ],
    id: "item6",
  },
  {
    category: "Product Design & Research",
    positions: [{ id: "1", position: "VP of Product Design" }],
    id: "item7",
  },
  {
    category: "Product Management",
    positions: [
      {
        id: "1",
        position:
          "Principal Product Manager, Marketplace and Subscription Pricing",
      },
      {
        id: "2",
        position:
          "Senior Product Manager, Marketplace and Subscription Pricing",
      },
    ],
    id: "item8",
  },
  {
    category: "Sales",
    positions: [
      { id: "1", position: "Manager, ADR" },
      { id: "2", position: "Manager, Sales Development - LATAM" },
      { id: "3", position: "Mid Market Account Executive" },
      { id: "4", position: "Mid Market Account Executive - DACH" },
      { id: "4", position: "Sales Development Rep, Spanish Speaking" },
    ],
    id: "item9",
  },
];

document.querySelector(".career__dropdown").innerHTML = careerData
  .map(
    (career) =>
      `
      <div>
      <button onclick="myFunction(this.value)" value=${
        career.id
      } class="career__items">
    <h1>${career.category + " (" + career.positions.length + ")"}</h1>
    <svg
      id=${career.id}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 512 512"
    >
      <path
        d="M140 2.2c-4.4 1.7-7.7 4.4-17.1 13.7-14.4 14.3-16.3 17.7-16.4 28.6 0 5.8.5 9.1 1.9 12 1.3 2.7 33.3 35.5 99.5 101.8l97.6 97.7-97.7 97.8c-76 76-98.2 98.7-99.7 102.2-1.4 3-2.1 6.7-2.1 11 0 10.3 2.9 15.3 16.8 29.1 9.8 9.7 12.7 11.9 17.5 13.7 7.3 2.8 13.1 2.8 20.4.1 5.6-2 10.8-7.1 123-119.3C413.4 261 406 269.2 406 256c0-13.2 7.4-5-122.3-134.6C171.4 9.1 166.3 4.1 160.7 2.1c-7.2-2.6-13.6-2.6-20.7.1z"
      />
    </svg>
  </button>
  <div class=${career.id}>
    <a class href="/">${career.positions[0].position}</a>
  </div>
  </div>`
  )
  .join("");

console.log(careerData);
// show/hide toggler

function myFunction(item) {
  var target = document.querySelector("." + item);
  var toggleSvg = document.querySelector("#" + item);
  if (target.style.display === "none") {
    target.style.display = "block";
    target.style.padding = "18px 0 0 0";
    toggleSvg.style.transform = "rotate(270deg)";
  } else {
    target.style.display = "none";
    toggleSvg.style.transform = "rotate(-270deg)";
  }
}

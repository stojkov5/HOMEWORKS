const cars = [
  {
    id: 1,
    make: "Tesla",
    model: "Model S",
    year: 2022,
    color: "Red",
    price: "$89,990",
    features: ["Electric", "Autopilot", "Ludicrous Mode"],
    image:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/b22f5588-2758-46c8-a188-8e104a5aa09e/71f4b3cf-0408-416f-9a60-b2a5bd40b81a.png",
  },
  {
    id: 2,
    make: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Blue",
    price: "$55,300",
    features: ["V8 Engine", "Rear-Wheel Drive", "Convertible"],
    image:
      "https://www.motortrend.com/uploads/sites/5/2021/02/2021-Ford-Mustang-Mach-1-in-Fighter-Jet-Gray-2.png",
  },
  {
    id: 3,
    make: "Chevrolet",
    model: "Corvette",
    year: 2023,
    color: "Yellow",
    price: "$60,000",
    features: [
      "Mid-Engine",
      "8-Speed Dual-Clutch",
      "Performance Traction Management",
    ],
    image:
      "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023CHC060057_01_1280_GD0.png",
  },
  {
    id: 4,
    make: "BMW",
    model: "M3",
    year: 2022,
    color: "Black",
    price: "$70,895",
    features: [
      "Twin-Turbo Inline-6",
      "All-Wheel Drive",
      "M Sport Differential",
    ],
    image:
      "https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f43560e1e3d8e88cb/stills_0640_png/MY2022/15275/15275_st0640_116.png",
  },
  {
    id: 5,
    make: "Audi",
    model: "R8",
    year: 2022,
    color: "White",
    price: "$142,700",
    features: [
      "V10 Engine",
      "Quattro All-Wheel Drive",
      "Carbon Fiber Exterior",
    ],
    image:
      "https://images.dealer.com/ddc/vehicles/2022/Audi/R8/Coupe/perspective/front-left/2022_76.png",
  },
  {
    id: 6,
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2021,
    color: "Silver",
    price: "$110,850",
    features: ["Luxury Interior", "V8 Engine", "4MATIC All-Wheel Drive"],
    image: "https://cka-dash.s3.amazonaws.com/165-1120-MA222/model1.png",
  },
  {
    id: 7,
    make: "Porsche",
    model: "911",
    year: 2022,
    color: "Green",
    price: "$99,200",
    features: ["Twin-Turbo Flat-6", "Rear-Wheel Drive", "Sport Chrono Package"],
    image:
      "https://www.carvia.com/wp-content/uploads/2023/02/porsche-992-gt3-pts-mieten-natoolive.png",
  },
  {
    id: 8,
    make: "Lamborghini",
    model: "Huracan",
    year: 2022,
    color: "Orange",
    price: "$261,274",
    features: ["V10 Engine", "All-Wheel Drive", "Lamborghini Dynamic Steering"],
    image:
      "https://www.supercarclub.pl/wp-content/uploads/2022/04/Lamborghini-Huracan-EVO-Spyder.png",
  },
  {
    id: 9,
    make: "Ferrari",
    model: "488 GTB",
    year: 2021,
    color: "Red",
    price: "$262,647",
    features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Magnetic Suspension"],
    image:
      "https://www.hagginoaks.com/wp-content/uploads/2019/05/PNGPIX-COM-Red-Ferrari-488-GTB-Car-PNG-Image-min.png",
  },
  {
    id: 10,
    make: "Jaguar",
    model: "F-Type",
    year: 2022,
    color: "Blue",
    price: "$73,400",
    features: ["Supercharged V8", "All-Wheel Drive", "Convertible"],
    image: "https://s3.amazonaws.com/cka-dash/030-0921-CJ145/model1.png",
  },
  {
    id: 11,
    make: "Aston Martin",
    model: "DB11",
    year: 2022,
    color: "Silver",
    price: "$205,600",
    features: ["Twin-Turbo V12", "Rear-Wheel Drive", "Luxury Interior"],
    image:
      "https://di-uploads-development.dealerinspire.com/astonmartinminneapolis/uploads/2019/05/am-volante-main.png",
  },
  {
    id: 12,
    make: "McLaren",
    model: "720S",
    year: 2022,
    color: "Purple",
    price: "$299,000",
    features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Active Aerodynamics"],
    image:
      "https://www.motortrend.com/uploads/bg-index/2020-mclaren-720s-convertible.png",
  },
  {
    id: 13,
    make: "Bentley",
    model: "Continental GT",
    year: 2022,
    color: "Gold",
    price: "$231,800",
    features: ["W12 Engine", "All-Wheel Drive", "Luxury Interior"],
    image:
      "https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2022/bentley/continental-gt-convertible/v8/convertible/exteriorColors/2022_bentley_continental_convertible_gt-v8_sunburst-gold_032_ora.png",
  },
  {
    id: 14,
    make: "Rolls-Royce",
    model: "Phantom",
    year: 2022,
    color: "Black",
    price: "$450,000",
    features: ["V12 Engine", "Luxury Interior", "Rear-Wheel Drive"],
    image:
      "https://i.pinimg.com/originals/8e/8b/29/8e8b2931c8f9bd2811621ca75759477e.png",
  },
  {
    id: 15,
    make: "Mazda",
    model: "MX-5 Miata",
    year: 2022,
    color: "Red",
    price: "$26,830",
    features: ["SkyActiv-G Engine", "Rear-Wheel Drive", "Convertible"],
    image:
      "https://images.carprices.com/pricebooks_data/usa/colorized/2022/Mazda/View2/MX-5_Miata/Grand_Touring/MX5_GT_6P_46V.png",
  },
  {
    id: 16,
    make: "Subaru",
    model: "WRX STI",
    year: 2021,
    color: "Blue",
    price: "$37,245",
    features: [
      "Turbocharged Boxer Engine",
      "All-Wheel Drive",
      "Sport-Tuned Suspension",
    ],
    image:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/subaru-wrx-my21-index-01.png",
  },
  {
    id: 17,
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2021,
    color: "White",
    price: "$28,695",
    features: [
      "Turbocharged Inline-4",
      "Front-Wheel Drive",
      "Sport Suspension",
    ],
    image:
      "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/a7e6b3e053bab48953e4fda4374c8871.png",
  },
  {
    id: 18,
    make: "Nissan",
    model: "GT-R",
    year: 2021,
    color: "Silver",
    price: "$113,540",
    features: ["Twin-Turbo V6", "All-Wheel Drive", "Launch Control"],
    image:
      "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&w=8667&h=8667&x=797&y=222&height=326&width=578&vehicle=8_R35&paint=KAB&fabric=G&brand=nisnna&sa=1_G,2_LR,4_N,5_L,6_Y,7_3,11_Z,12_U,13_A,SHADOW_ON,PI_ON,PE_ON,2024",
  },
  {
    id: 19,
    make: "Toyota",
    model: "Supra",
    year: 2022,
    color: "Yellow",
    price: "$43,540",
    features: [
      "Turbocharged Inline-6",
      "Rear-Wheel Drive",
      "Adaptive Suspension",
    ],
    image:
      "https://easycars.jp/wp-content/uploads/2021/06/db22-ztrw_0_30_lyellow.png",
  },
  {
    id: 20,
    make: "Honda",
    model: "Civic Type R",
    year: 2021,
    color: "Red",
    price: "$37,895",
    features: [
      "Turbocharged Inline-4",
      "Front-Wheel Drive",
      "Sport Suspension",
    ],
    image:
      "https://images.dealer.com/ddc/vehicles/2021/Honda/Civic%20Type%20R/Hatchback/perspective/front-left/2021_76.png",
  },
];

let users = [
  {
    firstName: "Aleksandar",
    lastName: "Stojkov",
    phone: "078524931",
    email: "a.stojkov5@gmail.com",
    password: "123456789",
  },
];

function validateRegister(event) {
  event.preventDefault();

  const firstName = document.getElementById("registerName").value;
  const lastName = document.getElementById("registerLastName").value;
  const phone = document.getElementById("registerPhone").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  // Error message paragraphs
  const errorName = document.getElementById("errorName");
  const errorLastName = document.getElementById("errorLastName");
  const errorPhone = document.getElementById("errorPhone");
  const errorEmail = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPassword");

  let allInputSuccess = true;

  if (firstName.length < 3) {
    errorName.innerText = "Name Too Short";
    errorName.style.color = "red";
    allInputSuccess = false;
  } else {
    errorName.innerHTML = "<span>&#10003;</span>";
    errorName.style.color = "Green";
  }

  if (lastName.length < 3) {
    errorLastName.innerText = "Name Too Short";
    errorLastName.style.color = "red";
    allInputSuccess = false;
  } else {
    errorLastName.innerHTML = "<span>&#10003;</span>";
    errorLastName.style.color = "Green";
  }
  // Phone Number Validation

  const regexPhone = /^\d{9}$/;

  if (!regexPhone.test(phone)) {
    errorPhone.innerText = "Number like that does not exist";
    errorPhone.style.color = "red";
    allInputSuccess = false;
  } else {
    errorPhone.innerHTML = "<span>&#10003;</span>";
    errorPhone.style.color = "Green";
  }

  let indexOfAt = email.indexOf("@");
  let beforeAt = email.slice(0, indexOfAt);
  let afterAt = email.slice(indexOfAt + 1);
  if (!email.includes("@") || !afterAt.includes(".") || beforeAt.length < 3) {
    errorEmail.innerText = "Invalid Email";
    errorEmail.style.color = "red";
    allInputSuccess = false;
  } else {
    errorEmail.innerHTML = "<span>&#10003;</span>";
    errorEmail.style.color = "Green";
  }

  if (password.length < 8) {
    errorPassword.innerText = "Invalid Password";
    errorPassword.style.color = "red";
    allInputSuccess = false;
  } else {
    errorPassword.innerHTML = "<span>&#10003;</span>";
    errorPassword.style.color = "Green";
  }

  if (allInputSuccess) {
    document.getElementById("successMessage").innerText =
      "Thank you for the registration, you may Login now.";

    let userInfo = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
    };
    users.push(userInfo);
    document.getElementById("registerName").value = "";
    document.getElementById("registerLastName").value = "";
    document.getElementById("registerPhone").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
  }
  console.log(users);
}

function loginForm(event) {
  event.preventDefault();

  const loginEmail = document.getElementById("inputEmailLogin").value;
  const loginPassword = document.getElementById("inputPasswordLogin").value;
  const loginMessage = document.getElementById("successLogin");
  const loginUser = users.find(
    (user) => user.email === loginEmail && user.password === loginPassword
  );

  if (loginUser) {
    loginMessage.innerHTML = "<span>&#10003;</span>";
    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".modal-backdrop").style.display = "none";
    document.getElementById("logRegForm").style.display = "none";
    document.body.style.height = "100%";
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".carsContainer").style.display = "block";
    console.log(`Uspeshno se logira userot ${loginUser.firstName}`);
  } else {
    loginMessage.innerText = `Wrong email or password `;
    loginMessage.style.color = "red";
  }
}

function displayCars(carsArray) {
  let carContainer = document.getElementById("carsContainer");
  carContainer.innerHTML = "";
  carsArray.forEach((car) => {
    carContainer.innerHTML += `
     <div class="col-12 card-container">
      <div style="height:500px;!ipmortant border: 1px solid white" class="card bg-dark bg-gradient">
        <div class="row h-100">
          <div class="col-6 d-flex">
            <div class="card-body d-flex flex-column justify-content-evenly text-white">
              <div>
                <h1 class="card-title text-center">${car.make} ${car.model}</h1>
                <hr>
                <p class="card-text year text-center">${car.year}</p>
              </div>
              
              <p class="card-text text-center features">
              ${car.features}
              </p>
              
              <div >
               <p class="text-center card-text price">${car.price}</p>
              </div>
             
            </div>
          </div>
          <div class="col-6 d-flex justify-content-center align-items-center">
            <img class="img-fluid" src="${car.image}" alt="${car.make} ${car.model}">
          </div>
        </div>
      </div>
    </div>
  `;
  });
}
displayCars(cars);

function filterCars() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filterCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchInput) ||
      car.model.toLocaleLowerCase().includes(searchInput)
  );
  displayCars(filterCars);
}

function sortCars(order) {
  const sortedCars = [...cars].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[\$,]/g, ""));
    const priceB = parseFloat(b.price.replace(/[\$,]/g, ""));
    return order === "ascending" ? priceA - priceB : priceB - priceA;
  });
  displayCars(sortedCars);
}

function filterCarsByFeature(feature) {
  const filteredCars = cars.filter((car) =>
    car.features.some((carFeature) =>
      carFeature.toLowerCase().includes(feature.toLowerCase())
    )
  );
  displayCars(filteredCars);
}

document
  .getElementById("sortAscending")
  .addEventListener("click", () => sortCars("ascending"));
document
  .getElementById("sortDescending")
  .addEventListener("click", () => sortCars("descending"));

const filteredCars = document.getElementById("filterCars");
document.getElementById("searchInput").addEventListener("keyup", filterCars);

document
  .getElementById("filterElectric")
  .addEventListener("click", () => filterCarsByFeature("Electric"));
document
  .getElementById("filterAWD")
  .addEventListener("click", () => filterCarsByFeature("All-Wheel Drive"));
document
  .getElementById("filterConvertible")
  .addEventListener("click", () => filterCarsByFeature("Convertible"));

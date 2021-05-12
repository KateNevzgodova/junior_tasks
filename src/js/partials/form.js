const formPage = document.querySelector(".form-page");
document.querySelector(".form-page").onload = function () {

let modal = document.getElementById("modal_window");
modal.querySelectorAll(".close-modal").forEach(function (element) {
element.addEventListener("click", function () {
modal.style.display = "none";});
});

let countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L\'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
const countryElement = document.getElementById("country");
const option = document.createElement("option");
option.innerText = "Please select a country";
option.className = "placeholder";
countryElement.appendChild(option);
countryList.forEach(function (country) {
const option = document.createElement("option");
option.innerText = country;
countryElement.appendChild(option);});

// чтобы в индексе нельзя было бы вводить что-то кроме цифр:
const zip = document.getElementById("zip");
zip.addEventListener("input", function (event) {
// замещает все not digital
event.target.value = event.target.value.replace(/\D/g, "");
});

document.getElementById("form_registration").addEventListener("submit", function (event) {
   //предотвращаем отправку формы путём отмены события
    event.preventDefault();
    let isValid = true;
    let fields = event.target.elements;
    let username = fields["username"];
    let password = fields["password"];
    let name = fields["name"];
    let address = fields["address"];
    let country = fields["country"];
    let zip = fields["zip"];
    let sex = fields["sex"];
    let about = fields["about"];
    // let langList = fields["language"];
    event.target.querySelectorAll(".alert").forEach(function (alert) {
          alert.remove();
    });
 if (username.value.match(/[!#^&*()<>?=/\-+@{}_$%]/g)) {
    isValid = false;
    showMistakes(username,"Must contain letters <br> Must not contain special characters  (!#^&*()<>?=-+@{}_$%).");
 }
 if (password.value.match(/[!#^&*()<>?=/\-+@{}_$%]/g) || !password.value.match(/[a-z]/g) || !password.value.match(/[A-Z]/g) || !password.value.match(/\d/g)) {
    isValid = false;
    showMistakes(password,"Must contain min 1 uppercase letter and 1 lowercase letter <br> Must contain min 1 number <br> Must not contain special characters  (!#^&*()<>?=-+@{}_$%).");
 } 
 if (name.value.replace(" ", "").match(/(\\W+)|(\\d)/g)) {
    isValid = false;
    showMistakes(name,"Alphabates only");
 }
 if (country.selectedIndex === 0) {
     isValid = false;
     showMistakes(country,"Required"); }
 if (isValid) {
      let result = {
           username: username.value,
           password: password.value,
           name: name.value,
           address: address.value,
           country: country.value,
           zip: zip.value,
           sex: sex.value,
        //    language: language,
           about: about.value
           
        };
        console.log(result);
   }
   })

   function showMistakes(mistake, innerHTML) {
      const show = document.createElement("div");
      show.className = "show";
      const showText = document.createElement("span");
      showText.innerHTML = innerHTML;
      show.appendChild(showText);
      mistake.after(show);
      };
}
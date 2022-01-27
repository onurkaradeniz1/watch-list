// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';

Rails.start()
Turbolinks.start()
ActiveStorage.start()


const promoChat = () => {
  fetch("https://api.themoviedb.org/3/movie/550?api_key=e4481682f0390d68630151ddc04375ea")
    .then(response => response.json())
    .then((data) => {
      console.log(data)
});
};

promoChat()

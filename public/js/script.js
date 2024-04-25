const clickMe = () => {
  alert('Thanks for clicking me. Hope you have a nice day!')
}

const getCards = items => {
  items.forEach(item => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img id="cardImg" class="activator" src="' +
      item.path +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      '</a></p></div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.subTitle +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      '</p>' +
      '</div></div></div>'
    $('#card-section').append(itemToAppend)
  })
}

const getAllCards = () => {
  $.get('/api/cards', response => {
    if (response.statusCode == 200) {
      getCards(response.data)
    } else {
      console.log(response)
    }
  })
}

//POST function for submitting card response
const addCard = cart => {
  $.ajax({
    url: '/api/card',
    data: cart,
    type: 'POST',
    success: result => {
      alert(result.message)
      location.reload()
    }
  })
}

let socket = io();
socket.on('number', (msg) => {
    console.log('Random Number: ' + msg);
});

const submitForm = () => {
  let formData = {}
  formData.title = $('#title').val()
  formData.subTitle = $('#subTitle').val()
  formData.path = $('#path').val()
  formData.description = $('#description').val()

  console.log(formData)
  addCard(formData)
}

$(document).ready(function () {
  $('.materialboxed').materialbox()
  $('#formSubmit').click(() => {
    submitForm()
  })
  $('.modal').modal()
  getAllCards()
})

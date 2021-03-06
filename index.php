<!doctype html>
<html lang="ru">
   <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Кофе-машина</title>
   </head>
   <body>
      <div class="container">
      <div class="row">
      <div class="col-6 coffee-list d-flex flex-column justfly - content-around">
      <div class="coffee-item" onclick="makecoffee('Американо', 50, event)">
         <img src="img/americano.png" alt="Американо">
         <span>Американо - 50 руб.</span>
      </div>
      <div class="coffee-item" onclick="makecoffee('Капучино', 73, event)">
         <img src="img/cappuccino.png" alt="Капучино">
         <span>Капучино - 73 руб.</span>
      </div>
      <div class="coffee-item" onclick="makecoffee('Эспрессо', 61, event)">
         <img src="img/espresso.png" alt="Эспрессо">
         <span>Эспрессо - 61 руб.</span>
      </div>
      <div class="coffee-item" onclick="makecoffee('Латте', 112, event)">
         <img src="img/latte.jpg" alt="Латте">
         <span>Латте - 112 руб.</span>
      </div>
      </div>
            <div class="col-6 coffee-oper">
              
         <div class="row">
            <div class="col-6">
               
               <div class="display">
                  <p class="display-text">Выберите кофе</p>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
                    <div>
                      <img src="img/americano.png" alt="Американо">
                   </div>

            </div>
            <div class="col-6">
                             <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Баланс" aria-label="Имя получателя" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">&#8381</span>
  </div>
</div>
<div class="coffee-atm-container">
  <img src="img/bill_acc.png" alt="" class="atm">
  
</div>
<button class="btn btn-primary  btn-block mt-2 change-btn">Получите сдачу</button>
  
<div class="coffee-change-mt-2">
  
</div>
              </div>
         </div>
      </div>
      </div>
      </div>
      <div class="money">
        <img src="img/50rub.jpg" alt="" data-cost="50">
        <img src="img/100rub.jpg" alt="" data-cost="100">
        <img src="img/500rub.jpg" alt="" data-cost="500">
      <!-- Optional JavaScript -->
      <script src="script.js"></script>
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
   </body>
</html>
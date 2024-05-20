<?php
function leads()
{

   $name = $_POST['username'];
   $tel = $_POST['usertel'];
   $telegram = $_POST['telegram'];
   $ip = $_SERVER['REMOTE_ADDR'];

   $name = htmlspecialchars($name);
   $tel = htmlspecialchars($tel);
   $telegram = htmlspecialchars($telegram);

   $name = urlencode($name);
   $tel = urlencode($tel);
   $telegram = urlencode($telegram);


   $message = "Имя: " . urldecode($name) . "\n" .
      "Телефон: " . urldecode($tel) . "\n";

   if (!empty($telegram)) {
      $message .= "Телеграм: " . urldecode($telegram) . "\n";
   }

   $message .= "IP: " . urldecode($ip);

   // Отправка письма
   if (mail(
      //адрес отправки
      "test@gmail.com",
      "Лид",
      $message,
      "From: leadso@mail.by \r\n"
   )) {
      header("Location: ty.html");
   } else {
      echo "Error";
   }
}

call_user_func('leads');

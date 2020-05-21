<?php
  $first_name = $_POST['FirstName'];
  $email = $_POST['Email'];
  $message = $_POST['Message'];
  if (preg_match('/[a-zA-Zа-ЯА-Я]/', $first_name)){
    $isCorrectName = TRUE;
  } else {
    $isCorrectName = FALSE;
  }
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $isCorrectEmail = TRUE;
  } else {
    $isCorrectEmail = FALSE;
  }
  if (($isCorrectName) && ($isCorrectEmail)) {
    echo "Ваше сообщение<br> успешно отправлено";
  } 
  if (!$isCorrectName) {
    echo "In first name error ";
  }
  if (!$isCorrectEmail) {
    echo "In email error";
  }
?>
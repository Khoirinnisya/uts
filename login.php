<?php
header('Content-Type: application/json');

$validUsername = 'uts';
$validPassword = '123';

// Mendapatkan input JSON
$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['username']) && isset($input['password'])) {
    $username = $input['username'];
    $password = $input['password'];

    if ($username === $validUsername && $password === $validPassword) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["success" => false, "error" => "missing username or password"]);
}
?>
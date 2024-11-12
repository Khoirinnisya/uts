function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Pastikan username dan password diisi
  if (!username || !password) {
    alert("Username dan password harus diisi.");
    return;
  }

  // Mengirimkan data login ke PHP
  fetch("login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json()) // Mendapatkan data JSON dari server
    .then((data) => {
      if (data.success) {
        alert("Login berhasil!");

        // Sembunyikan form login dan tampilkan data diri
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("dataDiri").style.display = "block";

        // Menampilkan data diri pengguna
        document.getElementById("userUsername").textContent = username;
        document.getElementById("userEmail").textContent = username; // Asumsi email sama dengan username
        document.getElementById("userFullName").textContent = "John Doe"; // Contoh nama pengguna
      } else {
        alert("Username atau password salah. Silakan coba lagi.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

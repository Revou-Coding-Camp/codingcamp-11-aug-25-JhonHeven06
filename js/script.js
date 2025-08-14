document.addEventListener("DOMContentLoaded", function() {
    let nama = prompt("Masukkan Nama Anda:");
    if(nama) {
        document.getElementById("teksSambutan").innerText = `Hi ${nama}, Selamat Datang di Website`;
    }
});

// Validasi Form Pesan
document.getElementById("formPesan").addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let telepon = document.getElementById("telepon").value.trim();
    let pesan = document.getElementById("pesanText").value.trim();

    if(nama && email && telepon && pesan) {
        document.getElementById("hasilForm").innerHTML = `
            <h4>Data yang Anda kirim:</h4>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telepon:</strong> ${telepon}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        `;
    } else {
        alert("Harap isi semua field!");
    }
});

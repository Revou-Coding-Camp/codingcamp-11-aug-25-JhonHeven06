document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formBelajar");
    const table = document.getElementById("dataTable").querySelector("tbody");
    const welcomeText = document.getElementById("welcomeText");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const tanggal = document.getElementById("tanggal").value;
        const gender = document.querySelector("input[name='gender']:checked").value;
        const pesan = document.getElementById("pesan").value;

        if (!nama || !tanggal || !gender || !pesan) {
            alert("Semua field harus diisi!");
            return;
        }

        // Update welcome text
        welcomeText.textContent = `Hi, ${nama}!`;

        // Tambahkan data ke tabel
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${nama}</td>
            <td>${new Date(tanggal).toLocaleDateString()}</td>
            <td>${gender}</td>
            <td>${pesan}</td>
            <td><a href="#">Klik Disini</a></td>
            <td><button class="deleteBtn">X</button></td>
        `;
        table.appendChild(row);

        // Reset form
        form.reset();
    });

    // Event hapus data
    table.addEventListener("click", (e) => {
        if (e.target.classList.contains("deleteBtn")) {
            e.target.closest("tr").remove();
        }
    });
});

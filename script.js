function tampilkanPesan() {
    const pesan = document.getElementById("pesan");
    pesan.innerText = "I love you so Much Adek Yayakuu 😘💖";
    pesan.classList.remove("hidden");
  
    // Tambah hati
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      document.body.appendChild(heart);
  
      // Hapus setelah selesai
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  }
  
  function toggleMusik() {
    const musik = document.getElementById("musik");
    musik.paused ? musik.play() : musik.pause();
  }
  
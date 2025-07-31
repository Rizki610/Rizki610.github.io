function validateForm() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();

  const showMessage = (message, isSuccess = false) => {
    const msg = document.createElement('div');
    msg.className = `notif ${isSuccess ? 'success' : 'error'}`;
    msg.textContent = message;
    document.body.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 3000);
  };

  if (nama.length < 3) {
    showMessage('⚠️ Nama harus minimal 3 karakter.');
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showMessage('📧 Alamat email tidak valid.');
    return false;
  }

  showMessage('✅ Data berhasil dikirim!', true);
  return true;
}

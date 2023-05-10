const ASINS = [
  "B08FCP21DK",
  "B08BG5F3R2",
  "B086YXRGFY",
  "B085Y47GVB",
  "B083H1CYH4",
  "B082Q1X6BB",
  "B07ZSXTYK1",
  "B07XGR8DN9",
  "B07X6TVFC1",
  "B07X24T57L",
  "B07X1Y2PBQ",
  "B07WM23GP3",
  "B07PDHHS3Y",
]; // Örnek ASINS dizisi

// Local storage kontrol fonksiyonu
function checkLocalStorage(key) {
  return localStorage.getItem(key) !== null;
}

// ASINS array'ini local storage'e kaydetme
if (!checkLocalStorage("ASINS")) {
  localStorage.setItem("ASINS", JSON.stringify(ASINS));
}

// currentIndex'i local storage'e kaydetme
if (!checkLocalStorage("currentIndex")) {
  localStorage.setItem("currentIndex", 0);
}

// searchPerformed boolean'ını local storage'e kaydetme
if (!checkLocalStorage("searchPerformed")) {
  localStorage.setItem("searchPerformed", false);
}

// 5 saniye bekleyen fonksiyon
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function performSearch() {
  // Local storage'den değerleri çekme
  const storedASINS = JSON.parse(localStorage.getItem("ASINS"));
  const currentIndex = parseInt(localStorage.getItem("currentIndex"));
  const searchPerformed = JSON.parse(localStorage.getItem("searchPerformed"));

  // currentIndex, array index sayısından büyükse programı durdurma
  if (currentIndex >= storedASINS.length) {
    return;
  }

  // currentIndex ile array içindeki index'in elemanını alma
  const currentASIN = storedASINS[currentIndex];

  // searchPerformed = false ise devam etme
  if (!searchPerformed) {
    // Sayfa içerisindeki input alanına currentASIN değerini yazma
    const inputElement = document.querySelector(
      "#main-content > form > div.card.card-body.mb-3 > div.row > div:nth-child(1) > input"
    );
    inputElement.value = currentASIN;

    await wait(5000); // 5 saniye bekletme
  }

  // searchPerformed = false ise işleme devam etme
  if (!searchPerformed) {
    // Sayfa içerisindeki butona tıklama
    const buttonElement = document.querySelector(
      "#main-content > form > div.card.card-body.mb-3 > div.d-flex.justify-content-between.align-items-end.mb-0.mt-3 > button"
    );
    buttonElement.click();

    // searchPerformed değerini true olarak güncelleme
    localStorage.setItem("searchPerformed", true);

    await wait(5000); // 5 saniye bekletme
  }

  // searchPerformed = true ise işleme devam etme
  if (searchPerformed) {
    // Sayfa içerisindeki butona tıklama
    const buttonElement = document.querySelector(
      "#main-content > div.table-responsive.mb-3.card.card-body > table > tbody > tr > td:nth-child(9) > div > button"
    );
    if (buttonElement) {
      buttonElement.click();
    } else {
      localStorage.setItem("searchPerformed", false);
      // Yeni değeri bir artır
      const newCurrentIndex = currentIndex + 1;

      // Yeni değeri localStorage'e kaydet
      localStorage.setItem("currentIndex", newCurrentIndex.toString());
      location.reload();
      return;
    }

    await wait(5000); // 5 saniye bekletme
  }

  // searchPerformed = true ise işleme devam etme
  if (searchPerformed) {
    // Sayfa içerisindeki dropdown butonunu bulma
    const dropdownButton = document.querySelector(
      "#main-content > div.table-responsive.mb-3.card.card-body > table > tbody > tr > td:nth-child(9) > div > div > button.dropdown-item.font-size-sm.text-danger.open-modal-button"
    );

    if (dropdownButton) {
      dropdownButton.click();
    } else {
      // Dropdown butonu bulunamazsa searchPerformed'i false olarak güncelleme ve sayfayı yenileme
      localStorage.setItem("searchPerformed", false);
      // Yeni değeri bir artır
      const newCurrentIndex = currentIndex + 1;

      // Yeni değeri localStorage'e kaydet
      localStorage.setItem("currentIndex", newCurrentIndex.toString());
      location.reload();
      return;
    }

    await wait(5000); // 5 saniye bekletme
  }

  // searchPerformed = true ise işleme devam etme
  if (searchPerformed) {
    // Modal içerisindeki butona tıklama
    const modalButton = document.querySelector(
      "#modal-confirmation-form > div.modal-footer > button.btn.btn-success.text-white"
    );
    modalButton.click();

    // Yeni değeri bir artır
    const newCurrentIndex = currentIndex + 1;

    // Yeni değeri localStorage'e kaydet
    localStorage.setItem("currentIndex", newCurrentIndex.toString());

    // searchPerformed değerini false olarak güncelleme
    localStorage.setItem("searchPerformed", false);

    await wait(5000); // 5 saniye bekletme
  }
}

// 5 saniye bekleyen fonksiyon
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Performansı başlatma
performSearch();

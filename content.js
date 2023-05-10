const ASINS = [
  "B0BR4YCX31",
  "B08JV3D4DM",
  "B0BH9DPDCW",
  "B0BH99V59P",
  "B0BH99KZ9Z",
  "B0923J4FJL",
  "B082Q1X6BB",
  "B07PDHHS3Y",
  "B07PZRYKRR",
  "B07MDC5RR3",
  "B01GKOBZD0",
  "B0BWJQKXSD",
  "B0BR4YCX31",
  "B0BLCZ78V9",
  "B0BLCYHZB2",
  "B0B92ZSXM6",
  "B0B8VH5L97",
  "B0B5Z2GYHH",
  "B09V823G6P",
  "B098W86W5L",
  "B08PTYZVLW",
  "B07Y1MWKC7",
  "B07VRKDYTK",
  "B07ST4ZM8R",
  "B07L13XS3S",
  "B07H4TLTW7",
  "B079HB999F",
  "B078S7BJ4X",
  "B01H2SNOLE",
  "B0BRYFWMBM",
  "B0BRWCLGWP",
  "B0BN37SMXG",
  "B0BD8B3CVR",
  "B0BCG61C4M",
  "B0B95P3ZT3",
  "B0B92QBF45",
  "B0B7NDPBPV",
  "B09T2Q1HF7",
  "B09MGZ4TYT",
  "B09MCR2B3L",
  "B09MCR1ZXW",
  "B09MCQZZQ5",
  "B09MCQ2HXX",
  "B09LV8XXG7",
  "B09CMBSVGM",
  "B099DTR4FW",
  "B098X8XM3N",
  "B098946JDY",
  "B097QS9P4B",
  "B08PL1JX98",
  "B08GS6RY31",
  "B0BSLWR6L6",
  "B0BRJ1H8DK",
  "B0BRCVL3ST",
  "B0BNVJWRY7",
  "B0B49MYYX4",
  "B09ZQPXN51",
  "B09ZPCT6GP",
  "B08MW22DP2",
  "B08KXVFDPV",
  "B08JV3D4DM",
  "B083XLMZRL",
  "B07ZQFJWLJ",
  "B07FCQW2SZ",
  "B013GMASUA",
  "B00OZWF2CK",
  "B07VBLF842",
  "B00JNVQN08",
  "B000NM1AEA",
  "B08R7L2Z1N",
  "B08R7KCRG8",
  "B082FJ6SK2",
  "B081X27RBM",
  "B081X185F4",
  "B081WXY7NR",
  "B07T2D3JHV",
  "B07RZVK19F",
  "B07RLR2C66",
  "B07G2T4SFT",
  "B01DBBHB74",
  "B00PHAZ5XK",
  "B00JIM8OHC",
  "B00B24PPR6",
  "B08F4D68N2",
  "B07HNFRK1K",
  "B07BY1NYX9",
  "B00SK3UUCW",
  "B0BPNPN3KL",
  "B0B9BVYQT9",
  "B0B6J53W67",
  "B0B6J4V9FP",
  "B0B346ZXDW",
  "B0B1QCXDTM",
  "B0B1QCG58W",
  "B07T4J25XX",
  "B0BY8WJCL7",
  "B0BXWXR7RG",
  "B0BH9DPDCW",
  "B0BH99V59P",
  "B0BH99KZ9Z",
  "B0B18FZHZS",
  "B09ZQVTLKR",
  "B09JKNP826",
  "B09B3Q8438",
  "B095SZD9QJ",
  "B0923J4FJL",
  "B0921FN327",
  "B091KK8WZK",
  "B08YJTHZ8T",
  "B08WM28PVM",
  "B08T9FVBWT",
  "B08T5XK5ZF",
  "B08Q3Q85LK",
  "B08NXZHCD4",
  "B08NXY6TCZ",
  "B08GM76B6H",
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
  "B07KG3PYJJ",
  "B07K2WB3SG",
  "B07F58NL7X",
  "B076SHBKB4",
  "B075JC6XH4",
  "B01N0NU0TW",
  "B01GVU4XYQ",
  "B01G98JSGS",
  "B01G98JSDG",
  "B01G98JR78",
  "B01F7FNN1U",
  "B013G19WKS",
  "B013G19TWY",
  "B013G19GWC",
  "B013G18XPI",
  "B00FHVQOL6",
  "B00CYDIFYY",
  "B00B0KJ3F2",
  "B00B0KFO8W",
  "B0BLZLBTK4",
  "B0BLZGSQGV",
  "B08R3ZTDTZ",
  "B08R3ZNXKF",
  "B08B38K2L9",
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

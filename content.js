const ASINS = ["B0BH99KZ9Z", "B0923J4FJL", "B082Q1X6BB", "B07PDHHS3Y"]; // Örnek ASINS dizisi

// 5 saniye bekleyen fonksiyon
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Adımları gerçekleştiren fonksiyon
async function processASINS() {
  await wait(5000); // 5 saniye bekleyin
  console.log("asinsfromlocalstoragedenönce");
  let ASINSFromLocalStorage = JSON.parse(localStorage.getItem("ASINS")) || [];
  let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;
  const searchPerformed = localStorage.getItem("searchPerformed") === "true";
  console.log("asinsfromlocalstoragedenönce");
  if (ASINSFromLocalStorage.length > 0) {
    ASINS.splice(0, ASINSFromLocalStorage.length, ...ASINSFromLocalStorage);
  }
  console.log("asinsfromlocalstoragedenönce");
  while (currentIndex < ASINS.length) {
    if (!searchPerformed) {
      console.log("asinsfromlocalstoragedenönce");
      const input = document.querySelector(
        "#main-content > form > div.card.card-body.mb-3 > div.row > div:nth-child(1) > input"
      );
      input.value = ASINS[currentIndex];
      await wait(5000); // 5 saniye bekleyin

      // İkinci adım
      if (!localStorage.getItem("searchPerformed")) {
        const button = document.querySelector(
          "#main-content > form > div.card.card-body.mb-3 > div.d-flex.justify-content-between.align-items-end.mb-0.mt-3 > button"
        );
        button.click();
        localStorage.setItem("searchPerformed", "true");
        await wait(5000); // 5 saniye bekleyin

        // Üçüncü adım
        if (localStorage.getItem("searchPerformed") === "true") {
          const button2 = document.querySelector(
            "#main-content > div.table-responsive.mb-3.card.card-body > table > tbody > tr > td:nth-child(9) > div > button"
          );
          button2.click();
          await wait(5000); // 5 saniye bekleyin

          // Dördüncü adım
          if (localStorage.getItem("searchPerformed") === "true") {
            const button3 = document.querySelector(
              "#main-content > div.table-responsive.mb-3.card.card-body > table > tbody > tr > td:nth-child(9) > div > div > button.dropdown-item.font-size-sm.text-danger.open-modal-button"
            );
            if (button3) {
              button3.click();
              await wait(5000); // 5 saniye bekleyin

              // Beşinci adım
              if (localStorage.getItem("searchPerformed") === "true") {
                const confirmationButton = document.querySelector(
                  "#modal-confirmation-form > div.modal-footer > button.btn.btn-success.text-white"
                );
                confirmationButton.click();
                localStorage.setItem("searchPerformed", "false");
                await wait(5000); // 5 saniye bekleyin
              } else {
                break;
              }
            } else {
              break;
            }
          } else {
            break;
          }
        } else {
          break;
        }
      } else {
        break;
      }
    } else {
      break;
    }

    currentIndex++;
    localStorage.setItem("currentIndex", currentIndex.toString());
  }

  ASINSFromLocalStorage = ASINS.slice(currentIndex);
  localStorage.setItem("ASINS", JSON.stringify(ASINSFromLocalStorage));
}

processASINS();

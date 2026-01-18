let tg = window.Telegram.WebApp;
tg.ready();

async function convert() {
  let link = document.getElementById("link").value;

  if (!link) {
    alert("Please paste Terabox link");
    return;
  }

  alert("Backend এখনো connect করা হয়নি 🙂");
}

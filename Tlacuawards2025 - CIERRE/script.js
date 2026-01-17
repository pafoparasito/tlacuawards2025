
document.addEventListener("DOMContentLoaded", () => {
    const conejo = document.querySelector(".conejo");
    const jumpscare = document.querySelector(".jumpscare");
    const flash = document.querySelector(".jumpscare-flash");

    const screamerSound = document.getElementById("screamerSound");
    const buttonSound = document.getElementById("buttonSound");
    const yeehawSound = document.getElementById("yeehawSound");

    const botones = document.querySelectorAll(".boton-categoria");
    const logo = document.querySelector(".logo-banner");

    const dairaContainer = document.querySelector(".daira-container");
    const dairaImg = document.querySelector(".daira-img");
    const dairaBlood = document.querySelector(".daira-blood");
    const dairaText = document.querySelector(".daira-text");
    const dairaScream = document.getElementById("dairaScream");
    const okuContainer = document.querySelector(".oku-container");
    const okuLaugh = new Audio("ASSETS/okulaugh.wav");
    okuLaugh.volume = 0.35;

    if (okuContainer) {
        okuContainer.addEventListener("click", () => {
            okuLaugh.currentTime = 0;
            okuLaugh.play();
            document.body.classList.add("modo-oku");
        });
    }


    // ✅ Nuevo audio extra para Daira
    const gritoDai = new Audio("ASSETS/gritodai.wav");

    if (yeehawSound) yeehawSound.volume = 0.3;
    if (dairaScream) dairaScream.volume = 0.3;
    if (gritoDai) gritoDai.volume = 0.3;

    if (conejo && jumpscare && flash && screamerSound) {
        let t1, t2;

        conejo.addEventListener("click", () => {
            screamerSound.currentTime = 0;
            screamerSound.play();

            jumpscare.classList.remove("activo");
            void jumpscare.offsetWidth;
            jumpscare.classList.add("activo");

            flash.classList.add("activo");

            clearTimeout(t1);
            clearTimeout(t2);

            t1 = setTimeout(() => flash.classList.remove("activo"), 120);
            t2 = setTimeout(() => jumpscare.classList.remove("activo"), 4000);
        });
    }

    if (buttonSound && botones.length > 0) {
        botones.forEach((boton) => {
            boton.addEventListener("click", (e) => {
                buttonSound.currentTime = 0;
                buttonSound.play();

                if (boton.tagName.toLowerCase() === "a" && boton.href) {
                    e.preventDefault();
                    setTimeout(() => {
                        window.location.href = boton.href;
                    }, 70);
                }
            });
        });
    }

    if (logo) {
        logo.addEventListener("click", () => {
            if (yeehawSound) {
                yeehawSound.currentTime = 0;
                yeehawSound.play();
            }

            logo.classList.add("giro-3d");
            setTimeout(() => logo.classList.remove("giro-3d"), 1200);
        });
    }

    if (dairaContainer && dairaImg && dairaBlood && dairaText && dairaScream) {
        dairaContainer.addEventListener("click", () => {
            // ✅ Sonido 1 (el que ya tenías)
            dairaScream.currentTime = 0;
            dairaScream.play();

            // ✅ Sonido 2 (nuevo) - al mismo tiempo
            gritoDai.currentTime = 0;
            gritoDai.play();

            dairaImg.style.opacity = "0";
            dairaContainer.style.pointerEvents = "none";

            dairaBlood.classList.add("mostrar");

            dairaText.textContent = "...";
            dairaText.classList.add("visible");
        });
    }

    // ============================
    // ✅ Bloque votar (protegido)
    // ============================

    const titulo = document.getElementById("tituloCategoria");
    const iframeForm = document.getElementById("formIframe");
    const linkForm = document.getElementById("formLink");

    // Si estos elementos no existen, NO estamos en votar.html => salimos sin romper nada
    if (!titulo || !iframeForm || !linkForm) return;

    const iframePlaylist = document.getElementById("playlistIframe");
    const linkPlaylist = document.getElementById("playlistLink");

    const data = {
        "mejor-gameplay": {
            nombre: "MEJOR GAMEPLAY",
            formUrl: "https://forms.gle/XXXX",
            playlistId: "PLYYYYYYYYYYYYYYYY",
        },
        "clip-legendario": {
            nombre: "CLIP LEGENDARIO",
            formUrl: "https://forms.gle/XXXX",
            playlistId: "PLYYYYYYYYYYYYYYYY",
        },
    };

    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    const elegido = data[cat];

    if (!elegido) {
        titulo.textContent = "Categoría no encontrada 😭";
        iframeForm.style.display = "none";
        if (iframePlaylist) iframePlaylist.style.display = "none";
        linkForm.href = "index.html";
        linkForm.textContent = "Volver al inicio";
        return;
    }

    titulo.textContent = elegido.nombre;

    iframeForm.src = elegido.formUrl;
    linkForm.href = elegido.formUrl;

    if (iframePlaylist && linkPlaylist && elegido.playlistId) {
        iframePlaylist.src = `https://www.youtube.com/embed/videoseries?list=${elegido.playlistId}`;
        linkPlaylist.href = `https://www.youtube.com/playlist?list=${elegido.playlistId}`;
    }
});
// ============================
// ⏳ COUNTDOWN EVENTO
// ============================

const countdownEl = document.getElementById("countdown");

if (countdownEl) {
    // 24/01 20:00 Argentina (UTC-3)
    const eventDate = new Date("2026-01-24T20:00:00-03:00");

    const updateCountdown = () => {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            countdownEl.textContent = "🎉 ¡El evento ya comenzó!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

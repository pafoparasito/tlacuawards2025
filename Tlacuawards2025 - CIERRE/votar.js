document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("tituloCategoria");

  const iframeForm = document.getElementById("formIframe");
  const linkForm = document.getElementById("formLink");

  const iframePlaylist = document.getElementById("playlistIframe");
  const linkPlaylist = document.getElementById("playlistLink");

  const marcoPlaylist = document.getElementById("marcoPlaylist");
  const fallbackPlaylist = document.getElementById("fallbackPlaylist");

  // Fuente: tus TXT (Forms + Playlists)
  const categorias = [
    {
      slug: "clip-forzado",
      nombre: "CLIP FORZADO",
      formUrl: "https://forms.gle/SyrREo6eFCQcrrP5A",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG79DJt3afpMRq6xU7enbkrp6",
    },
    {
      slug: "cringe",
      nombre: "CRINGE",
      formUrl: "https://forms.gle/H1BXe3ti89YMs9GT7",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7_gK_bp6tSQ69Ns6-zK2_Lg",
    },
    {
      slug: "momento-bruh",
      nombre: "MOMENTO BRUH",
      formUrl: "https://forms.gle/SGsagoWCwgh2Yzba8",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7_ppiwuG2fv0BvIqXhUXhcd",
    },
    {
      slug: "momento-funable",
      nombre: "MOMENTO FUNABLE",
      formUrl: "https://forms.gle/jyEQDoC2kaFHtsGv7",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG785jiSiHs8bgijW_3nW7-Mt",
    },
    {
      slug: "que-dijo",
      nombre: "QUÉ DIJO",
      formUrl: "https://forms.gle/VkDQf7drLEWyPpPy7",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG793dvFa_D8SlPfLJiY1-9IP",
    },
    {
      slug: "mejor-canto",
      nombre: "MEJOR CANTO",
      formUrl: "https://forms.gle/ZpMH2C4YnWy2v9ds7",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG79G7aVZAjxN-tnen4ThVKsV",
    },
    {
      slug: "mejor-caracterizacion",
      nombre: "MEJOR CARACTERIZACIÓN",
      formUrl: "https://forms.gle/dygzAUgSZR7HVPpy6",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG79RSBX-IOZRvd4xWRi9IDSJ",
    },
    {
      slug: "mejor-fandub-etr",
      nombre: "MEJOR FANDUB ETR",
      formUrl: "https://forms.gle/qKWdyE3he4rzHmis9",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG79fPrOqDcIFayDN6UlC_KPP",
    },
    {
      slug: "mejor-grito",
      nombre: "MEJOR GRITO",
      formUrl: "https://forms.gle/NGrGhhrbEbi8JrpWA",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7-xVmTomj0CA_KjVRqqdROH",
    },
    {
      slug: "mejor-improvisacion",
      nombre: "MEJOR IMPROVISACIÓN",
      formUrl: "https://forms.gle/YC83wi6VDpqVdkgK6",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7_Lpn3MELlTrMyh8DLvvxlZ",
    },
    {
      slug: "mejor-susto",
      nombre: "MEJOR SUSTO",
      formUrl: "https://forms.gle/Mckofj5Ma3r7TXHL7",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7_WePcT0hRzJmaZbuO_OgMY",
    },
    {
      slug: "mejor-timing",
      nombre: "MEJOR TIMING",
      formUrl: "https://forms.gle/6v7Jmq4wvat6zs5c8",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG79wkRvhUxBoC-aTnYq4k8p1",
    },
    {
      slug: "mente-colmena",
      nombre: "MENTE COLMENA",
      formUrl: "https://forms.gle/XRRMEeGKLAbYKESYA",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7-2nRxI42KxjQkk0-schx6c",
    },
    {
      slug: "mejor-gameplay",
      nombre: "MEJOR GAMEPLAY",
      formUrl: "https://forms.gle/3qSDEFEDrEraaYoJ6",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG786PAUS9ezS8t007tOFMvoe",
    },
    {
      slug: "momento-fail",
      nombre: "MOMENTO FAIL",
      formUrl: "https://forms.gle/nYv71N7KtH82NUMVA",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG78NcdNJ9slv7vazoS2JifJW",
    },
    {
      slug: "peor-canto",
      nombre: "PEOR CANTO",
      formUrl: "https://forms.gle/kXT2ZdoZ48sWkvKY6",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG78PqTLUHY6Y8vU45JTxMJwN",
    },
    {
      slug: "peor-gameplay",
      nombre: "PEOR GAMEPLAY",
      formUrl: "https://forms.gle/EQv6t96YK27UJ4NM6",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7_KRtjGgKuc0KNNGd1x3nIp",
    },
    {
      slug: "ragequit",
      nombre: "RAGEQUIT",
      formUrl: "https://forms.gle/4dQEQoYZAbgVxAGfA",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG79KdtB7H-MyVYxENx5Rxe1K",
    },
    {
      slug: "clip-legendario",
      nombre: "CLIP LEGENDARIO",
      formUrl: "https://forms.gle/VJbRK1GH7Qbp5Pxa6",
      playlistUrl: "https://www.youtube.com/playlist?list=PLYMg2qfDwG7--hoMPVswOIO_7XkvWd4UA",
    },
  ];

  const porSlug = Object.fromEntries(categorias.map(c => [c.slug, c]));

  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const elegido = porSlug[cat];

  if (!elegido) {
    titulo.textContent = "Categoría no encontrada 😭";
    iframeForm.style.display = "none";
    linkForm.href = "index.html";
    linkForm.textContent = "Volver al inicio";

    if (marcoPlaylist) marcoPlaylist.style.display = "none";
    if (fallbackPlaylist) fallbackPlaylist.style.display = "none";
    return;
  }

  titulo.textContent = elegido.nombre;

  iframeForm.src = elegido.formUrl;
  linkForm.href = elegido.formUrl;

  // Extrae el list=... de la URL de playlist
  let listId = "";
  try {
    const u = new URL(elegido.playlistUrl);
    listId = u.searchParams.get("list") || "";
  } catch (_) {
    listId = "";
  }

  if (listId) {
    iframePlaylist.src = `https://www.youtube.com/embed/videoseries?list=${listId}`;
    linkPlaylist.href = elegido.playlistUrl;
  } else {
    if (marcoPlaylist) marcoPlaylist.style.display = "none";
    if (fallbackPlaylist) fallbackPlaylist.style.display = "none";
  }
});

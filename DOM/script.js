$(document).ready(function() {
  const cards = [
    { category: 'aroma', front: 'Citrus', back: 'Aroma citrus menghadirkan wangi yang sangat berenergi dan menyegarkan.' },
    { category: 'aroma', front: 'Floral', back: 'Aroma floral menciptakan suasana yang feminin dan romantis.' },
    { category: 'aroma', front: 'Oriental', back: 'Aroma yang memberikan nuansa yang hangat, misterius, dan sedikit mewah.' },
    { category: 'aroma', front: 'Aquatic', back: 'Aroma aquatic menciptakan nuansa kesejukan dan kebebasan yang terinspirasi oleh lautan.' },
    { category: 'aroma', front: 'Fruity', back: 'Aroma fruity menghadirkan kelezatan buah-buahan segar seperti apel, stroberi, dan peach.' },
    { category: 'aroma', front: 'Gourmand', back: 'Aroma manis dan lezat yang menciptakan nuansa yang menggoda dan memikat.' },
    { category: 'aroma', front: 'Spicy', back: 'Aroma yang menghadirkan keberanian melalui aroma rempah-rempah seperti lada hitam, jahe, dan kayu manis.' },
    { category: 'aroma', front: 'Woody', back: 'Aroma yang terinspirasi dari kayu-kayuan.' },
    { category: 'aroma', front: 'Green', back: 'Aroma green menciptakan kesan kesegaran dan kehijauan yang murni. Aroma daun hijau, rumput, dan herbal memberikan nuansa yang bersih dan menyegarkan.' },
    { category: 'jenis', front: 'Extrait de Parfum', back: 'Jenis parfum dengan konsentrasi minyak 20-40%.' },
    { category: 'jenis', front: 'Perfume Oil', back: 'Jenis parfum dengan konsentrasi minyak 15-30%.' },
    { category: 'jenis', front: 'Eau de Parfum', back: 'Jenis parfum dengan konsentrasi minyak 10-20%.' },
    { category: 'jenis', front: 'Eau de Toilette', back: 'Jenis parfum dengan konsentrasi minyak 5-15%.' },
    { category: 'jenis', front: 'Eau de Cologne', back: 'Jenis parfum dengan konsentrasi minyak 2-4%.' },
    { category: 'jenis', front: 'Eau Fraiche', back: 'Jenis parfum dengan konsentrasi minyak 1-3%.' },
    { category: 'istilah', front: 'Accord', back: 'Perpaduan berbagai elemen atau bahan untuk menciptakan aroma.' },
    { category: 'istilah', front: 'Longevity', back: 'Durasi ketahanan aroma parfum yang masih bisa dideteksi pada kulit setelah diaplikasikan.' },
    { category: 'istilah', front: 'Projection', back: 'Sejauh mana aroma parfum tersebar ke lingkungan sekitar.' },
    { category: 'istilah', front: 'Sillage', back: 'Jejak aroma parfum yang tertinggal.' },
    { category: 'komposisi', front: 'Top Notes', back: 'Aroma pertama yang tercium setelah parfum disemprotkan.' },
    { category: 'komposisi', front: 'Heart Notes', back: 'Bahan-bahan yang membentuk inti dari parfum dan sering kali memberikan kesan yang lebih mendalam dan kompleks.' },
    { category: 'komposisi', front: 'Base Notes', back: 'Bahan-bahan yang memberikan kedalaman dan ketahanan pada parfum serta memberikan kesan yang paling berat.' },
  ];

  function sortCardsAlphabetically() {
    const cards = $(".card").get();

    cards.sort(function(a, b) {
      const textA = $(a).find(".front").text().toUpperCase();
      const textB = $(b).find(".front").text().toUpperCase();
      return textA.localeCompare(textB);
    });

    $(".container").empty().append(cards);
  }

  function generateCards() {
    const container = $('#card-container');
    container.empty(); 

    cards.forEach(card => {
      const cardElement = $(`
        <div class="card" data-category="${card.category}">
          <div class="inner">
            <div class="front">${card.front}</div>
            <div class="back">${card.back}</div>
          </div>
        </div>
      `);
      container.append(cardElement);
    });
  }

  generateCards();

  $(document).on("click", ".card", function() {
    $(this).toggleClass("flip");
  });

  $(".filter button").click(function() {
    $(".filter button").removeClass("active");
    $(this).addClass("active");

    const category = $(this).data("category");

    $(".card").removeClass("flip");

    if (category === "all") {
      $(".card").show();
      sortCardsAlphabetically(); 
    } else {
      $(".card").hide();
      $('.card[data-category="' + category + '"]').show();
    }
  });

  $(".filter button[data-category='all']").addClass("active");
  sortCardsAlphabetically();
  $(".card").show();
});

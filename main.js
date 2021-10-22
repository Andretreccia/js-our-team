

const alleanzaRibelle =
    [
        {
            name: "Leila Organa",
            role: "Dipolatico",
            image: "https://static.wikia.nocookie.net/starwars/images/1/15/Leia_3.jpg/revision/latest/scale-to-width-down/650?cb=20191030220537&path-prefix=it"

        },
        {
            name: "Ian Solo ",
            role: "Generale",
            image: "https://static.wikia.nocookie.net/starwars/images/c/c8/Epiv2.jpg/revision/latest?cb=20090402162704&path-prefix=it"

        },
        {
            name: "Luke Skywalker",
            role: "Comandante",
            image: "https://i1.wp.com/starwarsitalia.net/wp-content/uploads/Star-Wars-Italia-Luke-Limpero-colpisce-ancora.png?resize=750%2C882&ssl=1"

        },
        {
            name: "Lando Calrissian",
            role: "Generale",
            image: "https://static.wikia.nocookie.net/starwars/images/7/7d/Lando_WoSW.jpg/revision/latest?cb=20090621145846&path-prefix=it"

        },
        {
            name: "Gial Ackbar ",
            role: "Ammiraglio",
            image: "https://static.wikia.nocookie.net/starwars/images/f/fb/Ackbar_HS.jpg/revision/latest?cb=20140105210611&path-prefix=it",
        },

    ]

for (let i = 0; i < alleanzaRibelle.length; i++) {
    const ribelle = alleanzaRibelle[i]
    console.log(ribelle.name);
    console.log(ribelle)
}
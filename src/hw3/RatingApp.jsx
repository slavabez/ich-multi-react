import { useState } from "react";

function Rating(){
    // Переменная для индекса картинки
    const [ratingValue, setRatingValue] = useState(0);

    // Массив ссылок на картинки
    const ratingList = [
        "https://example.com/horosho.jpg",
        // ...
    ];

    // Так же добавьте какие-нибудь стили, с помощью классов или встроенных стилей
    return <div>
        {/* Ссылка на картинку должна браться из ratingList по индексу ratingValue */}
        <img src={} alt="Рейтинг"/>
        {/* Добавить обработчик onClick, который переключит ratingValue на 0  */}
        <button>Рейтинг 1</button>
        {/* Добавить обработчик onClick, который переключит ratingValue на 1  */}
        <button>Рейтинг 2</button>
        {/* И так далее, для каждой картинки  */}
    </div>
}

function RatingApp(){
    return <Rating />
}
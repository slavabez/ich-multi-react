import React, {useState} from 'react';

function List(props) {
    const [people, setPeople] = useState([
        {
            name: 'John',
            age: 25
        }, {
            name: 'Lauren',
            age: 31,
        }, {
            name: 'Phillip',
            age: 32,
        }, {
            name: 'Jessica',
            age: 38
        }
    ])

    // Эта функция принимает индекс элемента, который нужно "отфильтровать",
    // то есть убрать из массива people. Чтобы это сделать - создайте новый массив
    // без элемента по индексу index и установите его через setPeople
    function removePersonByIndex(index){

    }


    // Отрисуйте список <li> на основе people.
    // Каждому элементу списка нужно добавить обработчик, который вызовет функцию
    // removePersonByIndex с индексом, который нужно удалить.
    return (
        <ul>

        </ul>
    );
}

export default List;
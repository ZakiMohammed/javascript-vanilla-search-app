"use strict"

// variables
let source = [
    { id: 1, name: 'Rozanne Lucier', number: '3937973893' },
    { id: 2, name: 'Kiera Markham', number: '8877665544' },
    { id: 3, name: 'Marita Galang', number: '9988776655' },
    { id: 4, name: 'Abby Dingess', number: '3038930933' },
    { id: 5, name: 'Carmon Denney', number: '9887766554' },
    { id: 6, name: 'Trina Biggerstaff', number: '2896868763' },
    { id: 7, name: 'Raymon Cruikshank', number: '4897486846' },
    { id: 8, name: 'Cherise Engstrom', number: '3979864876' },
    { id: 9, name: 'Jordan Braym', number: '8749467744' },
];

source.sort((contact1, contact2) => {
    const name1 = contact1.name.toLowerCase();
    const name2 = contact2.name.toLowerCase();

    if (name1 < name2) {
        return -1;
    } else if (name1 > name2)
        return 1;
    else return 0;
})

const list = document.querySelector('.list-group');
const txtName = document.querySelector('#name');
const total = document.querySelector('#total');
const searchCount = document.querySelector('#searchCount');
const empty = document.getElementById('empty');

const loadContacts = (contacts) => {
    list.innerHTML = '';
    for (const contact of contacts) {
        list.innerHTML += `
            <li class="list-group-item">
                ${contact.name}
                <span class="float-right">${contact.number}</span>
            </li>`;
    }

    // summary
    total.innerHTML = source.length;
    searchCount.innerHTML = contacts.length;

    // show message if not found or empty
    empty.className = contacts.length ? 'd-none' : '';
}

txtName.addEventListener('keyup', function () {

    // undefined or null or empty string or 0
    if (!txtName.value) {
        loadContacts(source);
        return;
    }

    // for starts with
    // const filtered = source.filter(i => i.name.toLowerCase().startsWith(txtName.value.toLowerCase()));

    // for includes and startsWith
    const filtered = source.filter(i =>
        i.name.toLowerCase().includes(txtName.value.toLowerCase()) ||
        i.number.toLowerCase().startsWith(txtName.value.toLowerCase())
    );
    loadContacts(filtered);
})

// initial load
loadContacts(source);
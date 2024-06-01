export default function createContent() {
    const parentSelector = document.querySelector('#content');

    
    const divTitle = createDivAndClass('title');
    const divContentText = createDivAndClass('contentText');
    

    const H1divTitle = document.createElement('h1');
    H1divTitle.classList.add('titleContent');
    H1divTitle.textContent = 'Savory Garden';
    console.log("before appending child H1DivTitle to divTitle");
    divTitle.appendChild(H1divTitle);


    // Creates the texts that will be appended to the divContentText
    const collectionOfText = ['Savory garden offers an exquisite dining experience, nestled in a lush, botanical setting that',
    'enhances each meticulously crafted dish with aromatic herbs and edible flowers.',
    'The restaurant\'s commitment to farm-to-table freshness and innovative cuisine invites',
    'guests to savor every bite in an ambiance of natural elegance and tranquility.'
    ];
    console.log("After creating collectionOfText");


    // Creates the p-elements and appends them to the divContentText
    createPs(...collectionOfText).forEach(p => {
        console.log(p);
        divContentText.appendChild(p)
    });
    console.log("After creating p elements and appending them to divContentText");
    parentSelector.appendChild(divTitle);
    parentSelector.appendChild(divContentText);


}


function createDivAndClass(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

function createPs(...args) {
    return args.map(arg => {
        const p = document.createElement('p');
        p.textContent = arg;
        return p;
    });
}

export {createContent, createDivAndClass, createPs};
const questionsArray = [
    {
        question: 'Which videogame sold the most copies ever',
        category: 'video game',
        answer: 'Minecraft',
    },
    {
        question: 'Which olympic sport did the Philippines win their only gold medal',
        category: 'olympic sport',
        answer: 'weight lifting',
    },
    {
        question: 'Which actor plays himself in the film Zombieland',
        category: 'Actor',
        answer: 'Bill Murry',
    },
    {
        question: 'Which land mammal can\'\t jump',
        category: 'land mammal',
        answer: 'elephand',
    },
    {
        question: 'which animal has the most powerful bite',
        category: 'animal',
        answer: 'hippopotamus',
    },
    {
        question: 'which country is pop star Shakira from',
        category: 'country',
        answer: 'Columbia',
    },
    {
        question: 'Which country does gouda cheese come from',
        category: 'country',
        answer: 'Netherlands',
    },
    {
        question: 'What year was Nepoleon defeated at Waterloo',
        category: 'year',
        answer: '1815',
    },
    {
        question: 'Which US president had the middle name "Millhouse"',
        category: 'US president',
        answer: 'Richard Nixon',
    },
    {
        question: 'Which famous rapper says "Smoke weed every day."',
        category: 'rapper',
        answer: 'Snoop Dog',
    },
    {
        question: 'What food is the national dish of England',
        category: 'food',
        answer: 'Chicken Tika Masala',
    },
]

const returnThreeQuestions = () => {
    let questionIndexSelected = []

    while(questionIndexSelected.length < 3){
        var r = Math.floor(Math.random() * questionsArray.length);
        if(questionIndexSelected.indexOf(r) === -1) questionIndexSelected.push(r);
    }

    let returnArray = [
        questionsArray[questionIndexSelected[0]],
        questionsArray[questionIndexSelected[1]],
        questionsArray[questionIndexSelected[2]],
    ]

    return(returnArray)
}

export default returnThreeQuestions
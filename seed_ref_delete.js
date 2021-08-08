use project;
db.dropDatabase();

db.placeholdername.insertMany([
{
    lesson-title: "Earth",
    background-image: "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",
    
    lesson: [
            section1: {
                        contents {
                                    title: "title",
                                    image: "img url",
                                    text: "string"
                                    },
                        question: {
                                    question-text: "string",
                                    answers : [
                                            {
                                                "answer-1-text": "string",
                                                "answer-1-value": 0/1
                                            },
                                            {
                                                "answer-2-text": "string",
                                                "answer-2-value": false
                                            },
                                            {
                                                "answer-3-text": "string",
                                                "answer-3-value": false
                                            },
                                            {
                                                "answer-4-text": "string",
                                                "answer-4-value": false
                                            },
                    ]
            }
        },
        section2: {
            contents {
                title: "title",
                image: "local url for images",
                text: "string",
                atmosphere: {
                    oxygen: int,
                    hydrogen: int,
                }
                },
            question: {
                question-text: "string",
                answers : [
                    {
                        "answer-1-text": "string",
                        "answer-1-value": true
                    },
                    {
                        "answer-2-text": "string",
                        "answer-2-value": false
                    },
                    {
                        "answer-3-text": "string",
                        "answer-3-value": false
                    },
                    {
                        "answer-4-text": "string",
                        "answer-4-value": false
                    },
                ]
            }
        },
        section3: {
            contents {
                title: "title",
                image: "local url for images",
                text: "string"
                },
            question: {
                question-text: "string",
                answers : [
                    {
                        answer-1-text: "string",
                        answer-1-value: true
                    },
                    {
                        answer-2-text: "string",
                        answer-2-value: false
                    },
                    {
                        answer-3-text: "string",
                        answer-3-value: false
                    },
                    {
                        answer-4-text: "string",
                        answer-4-value: false
                    },
                ]
            };
        };
    ];
};
])

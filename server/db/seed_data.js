use project;
db.dropDatabase();

db.placeholdername.insertOne(

    {
        "lesson_title": "Earth",

        "background_image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",

        "lesson": {
                "sections": [
                                {
                                    "contents": {
                                                "title": "Overview",
                                                "text": "Earth is the third planet from the sun and is to our knowledge the only planet with life. The majority of the Earth's surface - around 70% - is covered in water. The other 30% is made up of large continental land masses and islands. Both of these environments support a vast array of both organic and plant lifeforms. Most of the earths Northern and Southern polar regions are covered in ice caps which support unique species."
                                                },
                                                

                                    "questions": [
                                                    { 
                                                        "text": "What percentage of the Earth's surface does water make up?",

                                                        "answers": [
                                                                {
                                                                "text": "55%",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "70%",
                                                                "value": 1
                                                                },
                                                                {
                                                                "text": "95%",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "17%",
                                                                "value": 0
                                                                }
                                                                ]

                                                        },

                                                    {
                                                        "text": "What species can be found at the Earth's Polar region?",
                                                        
                                                        "answers": [
                                                                    {
                                                                     "text": "Golden Eagle",
                                                                     "value": 0
                                                                    },
                                                                    {
                                                                     "text": "Polar Bear",
                                                                     "value": 1
                                                                    },
                                                                    {
                                                                     "text": "Zebra",
                                                                     "value": 0
                                                                    }
                                                                   ]         
                                                    }
                                                ]
                                },
                                
                                {
                                "contents": {
                                                "title": "Atmosphere And Mineral Composition",

                                                "image": "an image url",

                                                "text": "The atmosphere of the Earth consists of mostly Nitrogen and Oxygen, with trace amounts of other gases such as Argon, Carbon Dioxide and Water Vapour. The presence of plants has influenced the composition of the atmosphere due to photosynthesis - a process by which plants absorb Carbon Dioxide and release Oxygen. The upper layer of atmosphere is known as the Ozone Layer which blocks the harmful Ultraviolet radiation from the sun and permits life to flourish. Due to pollution, both naturally occuring and man made, the Ozone Layer is deteriorating. Our atmosphere facilitates a 'Greenhouse Effect'. It traps thermal energy radiated from the surface of the Earth preventing it from escaping to Space and allows our planet to maintain liveable temperatures. Without this effect the Earth would be too cold to support life. The pollution caused by humanity has had a large impact on the state of the Atmosphere and has caused an increase in the strength of the greenhouse effect and thus an increase in global temperature. This has had profound effects - disrupting the Earth's weather patterns, as well as accelerating the melting of Polar ice leading to rising sea levels. Some Facts about atmosphere: oxygen - 21%, nitrogen -78%, other - 1%. And some minerals of Earth! Mineral Structure: Silica - 60%, Alumnia 16%, Lime 6%, iron oxide 6%, magnesia 5%",
                                                                },
                                                
                                            
                                "questions": [
                                                {
                                                    "text": "What is the Oxygen content of the Earth's atmosphere?",

                                                    "answers": [
                                                                {
                                                                "text": "45%",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "16%",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "37%",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "21%",
                                                                "value": 1
                                                                }
                                                                ]

                                                }
                                            ]
                                        },
                                        {
                                        "contents": {
                                                    "title": "Solar System",
                                                    "text": "Earth's Neighbours"
                                                    },
                                        "questions": [
                                                    {
                                                    "text": "Name planets in earth solar system! Try as many as you remember! Which is the 6th planet from the sun?",

                                                    "answers": [
                                                                {
                                                                "text": "Earth",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Neptune",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Pluto",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Saturn",
                                                                "value": 1
                                                                },
                                                                {
                                                                "text": "Mars",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Mercury",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Jupiter",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Venus",
                                                                "value": 0
                                                                },
                                                                ]
                                                                        
                                                    },
                                                    {
                                                    "text": "What about the tiny planet closest to the Sun!",

                                                    "answers": [
                                                                {
                                                                "text": "Mars",
                                                                "value": 1
                                                                },
                                                                {
                                                                "text": "Earth",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Pluto",
                                                                "value": 0
                                                                },                                                                    
                                                                {
                                                                "text": "Mercury",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Jupiter",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Saturn",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Neptune",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Uranus",
                                                                "value": 0
                                                                }
                                                                ]
                                                        },
                                                    
                                                {
                                                "text": "And what about the one furthest from the sun!",
                                                
                                                "answers": [
                                                                {
                                                                "text": "Mercury",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Uranus",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Venus",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Mars",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Neptune",
                                                                "value": 1
                                                                },
                                                                {
                                                                "text": "Saturn",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Jupiter",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Earth",
                                                                "value": 0
                                                                }
                                                        ]

                                }
                            ]   
                            }
                         ]
                }
        }
);

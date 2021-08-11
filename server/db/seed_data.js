use project;
db.dropDatabase();

db.lessons.insertMany([

    {
        "lesson_title": "Earth",

        "background_image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",

        
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
        },
        {
            "lesson_title": "Black Holes",
        
            "background_image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",
        
            
            "sections": [
                            {
                            "contents": {
                                            "title": "Overview",
                                            "text": "What is a black hole? Black holes are one of the most mysterious and powerful forces in the universe. A black hole is where gravity has become so strong that nothing around it can escape, not even light. The mass of a black hole is so compact, or dense, that the force of gravity is too strong for even light to escape. Black holes are truly invisible. We can't actually see black holes because they don't reflect light. Scientists know they exist by observing light and objects around black holes. Strange things happen around black holes to do with quantum physics and space time. This makes them a popular subject of science fiction stories even though they are very real. How are they formed? Black holes are formed when giant stars explode at the end of their lifecycle. This explosion is called a supernova. If the star has enough mass, it will collapse on itself down to a very small size. Due to its small size and enormous mass, the gravity will be so strong it will absorb light and become a black hole. Black holes can grow incredibly huge as they continue to absorb light and mass around them. They can even absorb other stars. Many scientists think that there are super-massive black holes at the center of galaxies."    
                                        },
                        "questions": [
                                        { 
                                            "text": "Are Black Holes Visible for human eye?",
        
                                            "answers": [
                                                            {
                                                            "text": "OFC!",
                                                            "value": 0
                                                            },
                                                            {
                                                            "text": "Yes",
                                                            "value": 0
                                                            },
                                                            {
                                                            "text": "No! They reflect no light!",
                                                            "value": 1
                                                            }
                                                    ]
        
                                        },
        
                                        {
                                        "text": "What species can be found at the Earth's Po2lar region?",
                                                    
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
            },
            {
                "lesson_title": "Earth",
        
                "background_image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",
        
                
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
                }, 
    ]              
);

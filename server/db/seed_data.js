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
                                            "text": "What is a black hole? Black holes are one of the most mysterious and powerful forces in the universe. A black hole is where gravity has become so strong that nothing around it can escape, not even light. The mass of a black hole is so compact, or dense, that the force of gravity is too strong for even light to escape. Black holes are truly invisible. We can't actually see black holes because they don't reflect light. Scientists know they exist by observing light and objects around black holes. Strange things happen around black holes to do with quantum physics and space time. This makes them a popular subject of science fiction stories even though they are very real. How are they formed? Black holes are formed when giant stars explode at the end of their lifecycle. This explosion is called a supernova. If the star has enough mass, it will collapse on itself down to a very small size. Due to its small size and enormous mass, the gravity will be so strong it will absorb light and become a black hole. Black holes can grow incredibly huge as they continue to absorb light and mass around them. They can even absorb other stars. Many scientists think that there are super-massive black holes at the center of galaxies. There is a special boundary around a black hole called an event horizon. It is at this point that everything, even light, must go toward the black hole. There is no escape once you've crossed the event horizon!"    
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
                                        "text": "What is Event Horizon?!",
                                                    
                                        "answers": [
                                                        {
                                                        "text": "Great Game!",
                                                        "value": 0
                                                        },
                                                        {
                                                        "text": "Center of the black hole",
                                                        "value": 0
                                                        },
                                                        {
                                                        "text": "It is at this point that everything, even light, must go toward the black hole",
                                                        "value": 1
                                                        }
                                                    ]         
                                        }
                                    ]
                            },
                            {
                            "contents": {
                                        "title": "Black hole Pioneers",
        
                                        "image": "an image url",
        
                                        "text": "The idea of the black hole was first proposed by two different scientists in the 18th century: John Michell and Pierre-Simon Laplace. In 1967, a physicist named John Archibald Wheeler came up with the term black hole."
                                        },
                                            
                                        
                            "questions": [
                                            {
                                                "text": "Who first proposed the idea of black holes?",
        
                                                "answers": [
                                                                {
                                                                "text": "John Michell and Pierre-Simon Laplace",
                                                                "value": 1
                                                                },
                                                                {
                                                                "text": "Connor McGregor and Khabib Nugomadomedov",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Pinky And Brains",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Dexter and Mimie",
                                                                "value": 0
                                                                }
                                                            ]
        
                                            }
                                        ]
                                    },
                                    {
                                    "contents": {
                                                "title": "Fun Facts about black holes",
                                                "text": "Fun Facts about black holes Black holes can have the mass of several million suns. They don't live forever, but slowly evaporate returning their energy to the universe. The center of a black hole, where all its mass resides, is a point called a singularity. Black holes differ from each other in mass and their spin. Other than that, they are all very similar. The black holes we know about tend to fit into two size categories: stellar size are around the mass of one star while supermassive are the mass of several millions of stars. The big ones are located at the centers of large galaxies,"
                                                },
        
                                    "questions": [
                                                {
                                                "text": "How heavy are black holes?",
        
                                                "answers": [
                                                                {
                                                                "text": "Lighter then 1000 world war tanks",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Lighter then our Sun",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Heavier then Sun",
                                                                "value": 0
                                                                },   
                                                            ]
                                                                    
                                                },
                                                {
                                                "text": "Where are the biggest black holes?",
        
                                                "answers": [
                                                                {
                                                                "text": "Close to Earts Moon",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "In your closet!",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "On Staurns Disc",
                                                                "value": 0
                                                                },                                                                    
                                                                {
                                                                "text": "Moons Core",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Near The Center Of Universe",
                                                                "value": 0
                                                                },
                                                            
                                                            ]
                                                },
                                                
                                                {
                                            "text": "Where the so called singularity resides in black holes?",
                                            
                                            "answers": [
                                                            {
                                                            "text": "Around its Protective Field",
                                                            "value": 0
                                                            },
                                                            {
                                                            "text": "Outside of Black Hole magnetic field",
                                                            "value": 0
                                                            },
                                                            {
                                                            "text": "Inside of black hole magnetic field",
                                                            "value": 0
                                                            },
                                                            {
                                                            "text": "In the center of Black Hole",
                                                            "value": 1
                                                            }
                                                            
                                                    ]
        
                                            }           
                                    ]   
                            }
                    ]
            },
            {
                "lesson_title": "Stars",
        
                "background_image": "https://www.gannett-cdn.com/presto/2018/08/06/USAT/d7e9198a-b2fa-4ca6-b947-31c3751cc248-GettyImages-898660948.jpg?crop=5369,3020,x0,y0&width=3200&height=1680&fit=bounds",
        
                
                "sections": [
                                {
                                "contents": {
                                                "title": "Overview",
                                                "text": "Stars are giant spheres of superhot gas made up mostly of hydrogen and helium. Stars get so hot by burning hydrogen into helium in a process called nuclear fusion. This is what makes them so hot and bright. Our Sun is a star. There are many different types of stars. Stars that are in their main sequence normal stars are categorized by their color. The smallest stars are red and don't give off much of a glow. Medium size stars are yellow, like the Sun. The largest stars are blue and are hugely bright. The larger the main sequence star, the hotter and brighter they are.Main Sequence Star - Once a star, it will continue to burn energy and glow for billions of years. This is the state of the star for the majority of its life and is called the main sequence.

                                        
                                            },
                                                
        
                            "questions": [
                                            { 
                                                "text": "What chemical is burned by Stars ?",
        
                                                "answers": [
                                                                {
                                                                "text": "Oxygen",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Hydrogen",
                                                                "value": 1
                                                                },
                                                                {
                                                                "text": "Carbon",
                                                                "value": 0
                                                                },
                                                                {
                                                                "text": "Helium",
                                                                "value": 0
                                                                }
                                                        ]
        
                                            },
        
                                            {
                                            "text": " How many years will a star typically burn for ?",
                                                        
                                            "answers": [
                                                            {
                                                            "text": "Millions",
                                                            "value": 0
                                                            },
                                                            {
                                                            "text": "Billions",
                                                            "value": 1
                                                            },
                                                            {
                                                            "text": "Trillions",
                                                            "value": 0
                                                            }
                                                        ]         
                                            }
                                        ]
                                },
                                {
                                "contents": {
                                            "title": "Types of Stars",
        
                                            "image": "an image url",
        
                                            "text": "There are many different types of stars. Stars that are in their main sequence normal stars are categorized by their color. The smallest stars are red and don't give off much of a glow. Medium size stars are yellow, like the Sun. The largest stars are blue and are hugely bright. The larger the main sequence star, the hotter and brighter they are. Dwarfs - Smaller stars are called dwarf stars. Red and yellow stars are generally called dwarfs. A brown dwarf is one that never quite got large enough for nuclear fusion to occur. A white dwarf is the remnants of the collapse of a red giant star. Giants - Giant stars may be main sequence stars like a blue giant, or stars that are expanding like red giants. Some supergiant stars are as big as the entire Solar System! Neutrons - A neutron star is created from the collapse of a giant star. It's very tiny, but very dense",
                                            },
                                                
                                            
                                "questions": [
                                                {
                                                    "text": "What are the smallest stars called?",
        
                                                    "answers": [
                                                                    {
                                                                    "text": "Dwarfs",
                                                                    "value": 1
                                                                    },
                                                                    {
                                                                    "text": "Giants",
                                                                    "value": 0
                                                                    },
                                                                    {
                                                                    "text": "Neutrons",
                                                                    "value": 0
                                                                    },
                                                                    {
                                                                    "text": "Super Giants",
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

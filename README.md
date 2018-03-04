*** IMPORTANT RESOURCE ATTRIBUTES ***

- Films 
    * Card Info
        - title
        - episode_id
        - release_date
        - director
        - producer
        
    * Detailed Modal Info
        - opening_crawl
        - planets
        - species
        - starships
        - vehicles

- People 
    * Card Info
        - name
        - birth_year
        - homeworld
        




        FOR DEALING WITH LINKS, SO THAT YOU DON'T NEED TO MAKE 10 OR MORE CONSECUTIVE API REQUESTS:

        -  GET ALL PLANETS ON LOAD AND PUT THEM IN PLANETS ARRAY
        - THEN, WHEN ANOTHER ITEM, LIKE A FILM LISTS ITS PLANETS AS A BUNCH OF URLS, REFER BACK TO PLANETS ARRAY TO GET NAMES CORROSPONDNIG TO URLS
        - THEN DISPLAY THOSE NAMES INSTEAD OF URLS
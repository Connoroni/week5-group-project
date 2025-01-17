# week5-group-project

**Project name:** FlexFare
**Render link:** https://week5-group-project-client.onrender.com
**Repo link:** https://github.com/Connoroni/week5-group-project

**Team members:** Connor, Jackie and Zakariye

**Project description:**
An app that alows users to negotiate on the price of a taxi by recieving a recommended price for their route then being able to haggle on it with drivers who can accept, reject, or offer a different price.

**Problem domain:**
An app that allows users to set a route from their location to a desired location with an available price. Allowing drivers to see this price, and take it or offer a different price for the user to then accept or not.

**User stories:**

- As a user I want to be able to negotiate on the price of a journey
- As a user I want a user friendly app with media queries
- As a user I want to be able to set a starting and end point relatively easily
- As a user, the layout clear and concise, easy to read
- As a user, I want there to be a recommended price to have a starting point.
- As a driver, I want to be able to negotiate on fares to give customers a fair price and compare this to the recommended price to see if it’s worthwhile
- As a driver, I want to be able to go above the recommended price on a fare if a customer is willing

**Wireframe:**
![A wireframe showing the options to select pickup and destination, followed by choosing a recommended price and seeing a list of nearby drivers and their statuses](okso_flexfare.png)

**Dependencies:**

- Express
- Cors
- Dotenv
- Pg

**Instructions on how to run your app:**
From the render deployment, it should work fine unaltered. From the files directly, run npm run dev in the client.

**Lighthouse report:**
![Lighthouse report with 100 in performance and accessibility, 96 in best practices, 91 SEO](flexfare_lighthouse.png)

**Reflections:**
We met most of the user stories outlined in our trello apart from those that needed functionality on the driver's end, but we knew from the beginning that the driver side would be faked as Joe recommended this on Monday after we explained the app idea to him. The only customer-side one that we didn't meet was to be given a recommended price to start with, as we couldn't get the result of the database query to appear in the client after a long time trying.

We were able to provide good UI and UX through CSS and DOM manipulation making the second form appear only after the first had been submitted. The end result is clear and concise, with only the necessary information on the screen at any time.

Our time management could have been better which may have allowed us to create our MVP on time and then spend Thursday finishing off the app instead of spending Thursday in full-on coding mode as we did. This was somewhat out of our control though as Connor had to leave at lunchtime on Tuesday for his graduation and we spent a lot of Wednesday trying to fix a very weird error in the server-database connection.

The big error came when trying to connect the server to the database that Connor had created in Supabase. We tried fixing it with everything we could think of, and asked Joe for help who went through every possible solution before finding that it worked fine as long as it was connected to someone else's Supabase (Joe's to test, and Jackie's as the actual solution). We still don't know what caused the error, but it was solved when we had Jackie recreate the database and send across the connection string and password.

**References:**
Didn't actually end up using any third party resources, other than ChatGPT which came up with a list of names for the app including FlexFare which we all quickly agreed was our favourite.

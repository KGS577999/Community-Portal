# Community Portal Project

## Overview

Home Page Overview:
The homepage serves as a central hub for the community, welcoming visitors with a dynamically generated message and highlighting upcoming events. It begins with a shared header, followed by a personalized welcome message sourced from homeData. Below that, an events section presents community activities, with each event displayed dynamically from the sortedUpcomingEvents array. The events are filtered to show only those occurring within the next week, ensuring the homepage remains relevant and up to date. The events are also sorted chronologically, making it easy for visitors to see what's happening soon. The layout alternates event placement for visual balance, enhancing readability (right side events / left side events).

About Page Overview:
The About Us page provides an overview of the organization and introduces its community team in a structured layout. It begins with a shared header and a dynamically generated organization bio, ensuring that any updates are reflected automatically. The team section highlights each member's name, surname, profile picture, and brief personal bio, all sourced dynamically from an array. This setup allows for easy content management, keeping the page up to date without requiring that much manual edits.

Events Page Overview:
The events page offers a comprehensive view of all scheduled community activities. It starts with a consistent header, followed by a clear "Upcoming Events" heading to orient visitors. The main content area dynamically lists each event, displaying its image, title, date, and location. Upon hovering over an event, an overlay appears, revealing the title, date, location, and a detailed description. This interactive element provides additional information without cluttering the initial view. The page concludes with a shared footer, maintaining design consistency across the site.The events page.

Contact Page Overview:
The Contact page provides a direct channel for visitors to reach out. It begins with a standard header, followed by a prominent "Contact Us" heading. The core of the page is a user-friendly form, prompting visitors to enter their name, email address, and message. Each input field includes clear labels and placeholders to guide the user. The form utilizes the POST method to submit the entered data to the "/contact" route. Required fields are marked to ensure essential information is provided. A "Send" button allows users to submit their inquiries. Like other pages, it concludes with a consistent footer.

Thank You Page Overview:
Upon successful submission of the contact form, users are likely redirected to a "Thank You" page. This page typically confirms that their message has been received. It includes a thank you message, information about expected response times.

About Header Overview:
The Header is used as a navigation bar and connects links to the Home, Events, About and Contact page for users to navigate freely, it also contains a dark mode setting to switch the css styling to a darker colour pallete for users comfort.

About Footer Overview:
The footer is utilized to provide links to the community hub social medias, to keep users involved and informed of any future events.
## Tech used

- HTML (HyperText Markup Language): Used for structuring the content and layout of each webpage, including text, images, forms, and lists.

- CSS (Cascading Style Sheets): Employed for styling the visual presentation of the webpages, ensuring a consistent design with elements like headings, text formatting, image display, form appearance, and the event overlay effect. 

- JavaScript: Used for dynamic functionality such as: Displaying the personalized welcome message on the homepage. Filtering and sorting the upcoming events. Implementing the interactive overlay effect on the events page. Handling form submission on the contact page.

- EJS (Embedded JavaScript Templates): It facilitates the dynamic rendering of event data from arrays (homeData, sortedUpcomingEvents, events, and the team member array on the About page).

- Server-Side Language/Framework: Node.js with the Express.js.

- Data Storage: With dynamic in-memory array.

## Team members and roles

Tiaan Dorfling 578128       | - Events page, Contact page, Thank you page, dark-mode ,css for previous pages, mostly backend

Kyle Gregory Smith 577999   | - home page, about page, styling and frontend

Gabriel Botha 600708        | - Header, Footer and css for mentioned areas.

## Setup instruction

npm run dev to run nodemon app,
npm start to run node app

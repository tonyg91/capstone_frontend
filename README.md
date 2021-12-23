## Capstone Project

### Title: Bullet Journal App

## User Story 
A user can use this page to view different types of bullet journals, supplies, and page themes to get them started. The user can add in their own bullet journal themes, bullet journals, and supplies that they use and want to share with others. There will aslo be links for beginners to find out where they should start and what they should start with. When the user is adding their own personal page themes the user has a section to put there name as the creator.

## Models
# Journal
  -brand: String,
  -paperweight: String,
  -sizes: String,
  -image: String,
# Supply
 -brandName: String,
 -type: String,
 -ink: String,
 -image: String,
# Theme
 -image: String,
 -page: String,
 -creator: String

 ## Tech
 -Django
 -React 
 -CSS
 -Django Rest Framwork
 

### Route Table
## Journal
| URL | Method | Action |
|-----|--------|--------|
| / | GET | Home page for app|
| /journal | GET | Index page of all journals|
| /journal/:id | GET, DELETE | Show page of a single journal, User can also delete from this page|
| /edit/journal | PUT | Edit page for a journal|
| /new/journal | POST | Create a new journal|

## Supply
| URL | Method | Action |
|-----|--------|--------|
| / | GET | Masonite Welcome Page|
| /supply | GET, POST | Index page of all supplies as well as the page to add supplies|
| /suppply/:id | GET, DELETE | Show page of a single supply, User can also delete from this page|
| /edit/supply | PUT | Edit page for a supply|
| /new/supply | POST | Create a new supply|

## Theme
| URL | Method | Action |
|-----|--------|--------|
| / | GET | Masonite Welcome Page|
| /theme | GET, POST | Index page of all theme as well as the page to add theme|
| /theme/:id | GET, DELETE | Show page of a single theme, User can also delete from this page|
| /edit/theme | PUT | Edit page for a theme|
| /new/theme | POST | Create a new theme|

### Challenges 
The main challenge I had with the front end was trying to figure out how I was going to build it out. Was it all going to be shown on one page with everything on it. Or was it going to be all separate pages and inevitably I went with sepatate pages. Which worked out in the long run it still needs alot of work to get to the vison I had in mind but I like the way it turned out for now.
This guide will help you set up the frontend for the Cloud Resume Challenge project, even if you're new to it.

WALKTHROUGH

REQUIRED SOFTWARE
1. Install Git
2. Install Node.js:
  - Download and install Node.js from nodejs.org. This will also install npm (Node Package Manager), which is required for managing packages.
3. Create a new folder on your computer where you want to keep your files.
You can name this folder "Cloud_Resume_Challenge".

REPOSITORIES
1. Open the command line.
2. Use the command cd path/to/your/folder to change to your project folder.
   - Replace path/to/your/folder with the actual path.
3. Clone the Repository:
Use the command git clone git@github.com:YOUR_USERNAME/cloud_resume_frontend.git.

CREATE .gitignore FILE

1. Open Your Project Folder.
2. Create a .gitignore File:
- Right-click inside the folder, select "New," then "Text Document."
- Rename the file to .gitignore (make sure to remove the .txt extension).
- Open the file and add the following lines:
node_modules/
build/
.env
3. Save the file.


SET UP THE FRONTEND
1. Install Project Dependencies:
- Open command line and navigate to your project folder.
- Type npm install and press Enter. This command installs all the necessary packages listed in the package.json file.
2. Create a Main Entry File:
- If not already present, create a new file named index.js (or index.jsx if using React) in your project folder.
- Open index.js in a text editor and start building your frontend application.

INITIALIZE GIT AND PUSH CHANGES
1. Open Command Line.
2. Stage Your Files:
- Type git add . to add all files to Git.
3. Commit Your Changes:
- Type git commit -m "Initial commit for frontend" and press Enter.
4. Add the Remote Repository:
- Type git remote add origin git@github.com:YOUR_USERNAME/cloud_resume_frontend.git and press Enter.
5. Push Your Code:
- Type git push -u origin master and press Enter.

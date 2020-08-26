# hw-03-columbia

## The Password Generator ##

The objective of this project was to take the existing html code and create javascript code that allows the website to generate a random password that follows certain parameters as set by the user.


## The Road To The Solution ##

* One of the first things that needed to be done was to define the arrays of the characters the password generator would need to choose from. The list of characters used included uppercase, lowercase, numeric, and special characters.  

* Connecting the button from html and defining it as a variable was important as we needed to start adding functionality to it.

* Then creating a function to prompt the user to choose how long the password is going to be. Then setting the length requirements of the password to ensure it is in between 8 and 128 characters. Next it prompts the user to choose whether it will have the different characters included in the password. They can choose to approve or deny the use of some characters. Then checking to see if they have chosen any options to include characters in their password.

* Then had to create a function to generate the password based on the user's criteria then pushing the result into a password.

* Then I had to create a function that would write the password into the password input for it to show up on screen after all of the prompts were completed.

* Lastly adding a click function to the generateButton to initiate the code.
# Wk4-Code-Quiz04
## Feature/Start
For this branch I want to work on the starting page that has the following function:
- When I open the website page am greated,
- Give instructions on how the quiz works,
- Add a button that starts the quiz.

## Feature/StartHide:
For this branch I want to add an event listener to the start button so that
- When I press the start button,
- The landing page disappears.

## Feature/Questionsv2:
For this branch I want to reference the questions array on the html and do the following:
- When I press the start button,
- Display the first element of the array.
## Feature/Options:
For this branch I want to work on the choice selection and switching the question to the next.
- When I press on an option,
- The selected option gets highlighted,
- The next question and answers loads in until no more question are left.
## Feature/Result:
For this branch I want to show the result page when no more questions are left.
- When there are no questions left,
- Show me the result page,
- Allow me to submit a form.
**While the form is in place, form submition is not possible at the moment, there is no score to store yet. This will be addressed once the time/score feature is implemented**
## Feature/Time:
For this branch I want to show a timer and add time subtraction when the user gets a wrong answer:
- When the quiz starts: time starts,
- if an answer is wrong: subtract 10 seconds,
- if time runs out before the quiz is over: move the user to the result page.
## Feature/Highscore:
For this branch I want to store the user score and initials into local storage for future use:
- When the user submits the form,
- User string & score get stored in local storage.
+ Added the html structure,
+ Added & correctly attribute the list element to the object array.
## Feature/Style:
+ Added clear scores button functionality
+ Added list styling

# HOTFIX🔥🔥🔥
## Feature/Options:
During the development of this branch, I noticed the user could still select other choices and rack up potential points. To prevent this, I added a small "for each" function that disables the button functionality. While the time-frame where the user can select another option is minuscule, almost inhumane, nothing would stop a developer to exploit this potential vulnerability. **Issue fixed**😎
# Screenshots:
## Feature/start:
![Alt text](/asset/doc/FeatureStart.png)

## Feature/StartHide:
![Alt text](/asset/doc/StartHide.png)

## Feature/Questionv2:
![Alt text](/asset/doc/Questionsv2.png)

## Feature/Options:
![Alt text](/asset/doc/Options.png)

## Feature/Result:
![Alt text](/asset/doc/Result.png)

## Feature/Time: 
![Alt text](/asset/doc/Time.png)

## Feature/Highscores:
![Alt text](/asset/doc/Highscores.png)

## Feature/Style:
![Alt text](/asset/doc/Style.png)
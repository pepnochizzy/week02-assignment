# week02-assignment

An image gallery with a focus on responsive and accessible design

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

# Issues I faced

-- I found creating the first function (createThumbnails()) was the 'simplest', however, when creating the eventhandler (fullscreenImages()) I knew I had to, somehow, pass the current imgData of the clicked thumbnail but also knew this data was in local scope. I was realised I had to 'rubberduck' and reach out to course teachers. When discussing it, it became clear my issue was solely scope related.
In order to fix the issue I created: thumbnail.addEventListener(`click`, function () {
createFullscreenImages(imageData[i]);
}); the reason this works is because on click, an anonymous function passes the current imageData from the local scope into the createFullscreenImages function
-- I also found creating the next and previous (stretch goal for accessibility) difficult. I think it was that 'linking everything together' that will come with more practice of coding and using JS in complex ways. For the buttons I referenced the example gallery by TechEducators but made sure I went through each line and wrote out what it did in a comment to ensure I actually understood. I also handwrote it and changed certain aspects to fit my actual code.
-- wanting to add an eventlistener that runs when an arrow key is clicked, originally I thought I should have it linked to next and prev buttons but this wouldn't work as intended as the buttons would have to be focussed. I swapped to document.addEventListener, it now works as intended.

# Requirements achieved

-- I am hoping it has achieved all requirements.

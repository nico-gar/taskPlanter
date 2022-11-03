Hey everyone, my name is Nicolas Garaycochea and this is my DevMountain capstone foundations project.

I decided to go with a task list but with a little twist.

I call it task planter!

For this project I have used javascript, express, cors,  axios, html, and css

TaskPlanter has two pages, the first page is where your tasks will be listed.

After entering your task in the input field, you can click on the “plant task button”. This action uses axios.post to send data to the local database where you task is saved.

When your task is placed in the task list, a priority setting is placed with it. You can change its priority form 0 to 5. The priority number is sent to the backend to be saved in the local database.

You can edit your task if you make a mistake by clicking the edit button. The task will then switch to an update input field where you can change your task as you wish. Once you click the update button a put request is sent to the backend and your changes will be saved to the local database. 

The best feature of this task list is when you complete a task. Every time you click the complete button the number of total completed tasks increment, this number is then used to determine how much your plant has grown and as you continue to progress through the task list, your plant continues to grow. If you undo your completed task the plant will revert to its previous stage.

You can also delete a task you no long want to work on, this will neither harm nor help your plant.

The next page is a preview of what your plant will look like through all the stages of growth. You can visit this page at any time to get a preview.

And when you go back to the task page, your tasks will be there waiting for you.

Future updates to this site will include more variety of plants and when a plant is completed it will go into the garden for later viewing. With the completed plant you will also be able to view the tasks that helped it grow.
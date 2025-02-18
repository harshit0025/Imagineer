###########################################################

Q. Why do we have to create a database user if clerk is already doing it for us?

Well, yes. But no. We have to have access to the user in the database as well.  We have to know has that user created any images. We have to make references to the images with the user.

Q. How to do that?
We have to sync the data between the clerk user and our newly created database user.
We will do that by using a concept known as Webhooks.

Webhooks is a concept where when something happens an event is triggered.

In our case what will trigger the event?

In our case, clerk will trigger the event, once the user signs up with a new clerk account.
Then it will make a request to the payload with all the user clerk data, such as username, first name, last name, hashed password and more.

Then it will send our data to event processing directly to our database, we can then create a new user within our database and sync our data.

the easiest way is We need to deploy our application right now. We don't have a lot of stuff to show but we need to deploy it so that we can expose our application endpoints to the internet so that once we create a new clerk user, it can ping that endpoint and therefore automatically creates a new user in our database.

###########################################################

Hum clerk se user information le rhe hai in [route.ts] file and hum udhar create, update, delete users kar rhe h by actually calling those functions in [user.actions.ts]

[user.actions.ts] file mei hum ye sab functions implement kar rhe to store the information in the database

for a new user, after creating the user, we simply mergge the clerkId with our userId.
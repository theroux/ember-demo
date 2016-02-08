# marianatek

Task Summary:
Using Ember.js and the Ember CLI, create a “/messages” route that connects to the “messages” API endpoint and display each message in a formatted feed view.

tl;dr - Take this: http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages, make a page that looks like this: https://www.evernote.com/shard/s451/sh/4ede4edc-48fa-477b-a06f-2e89419df54a/092493e3a00860833e173844f6ee0eb6/res/9d34c4b8-587e-4364-a98b-74241122014d/messages.png using Ember.

Specifics:
Ember.js - http://emberjs.com/
Ember CLI - http://www.ember-cli.com/
Messages API Doc - http://docs.jsonapifizzbuzz.apiary.io/
Messages API endpoint - http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages

Suggestions:
You’ll need define a “/messages” route
You can set the data that you need in your template using the Route’s “model” hook
You’ll want to define a “message” Model which will act as an interface to communicate with the API
In the Route’s “model” hook, you can use the store.findAll function to retrieve all the messages from the API
You will also need to define a custom Adapter, so that ember knows the host to direct the request to: http://guides.emberjs.com/v2.1.0/models/customizing-adapters/#toc_host-customization
In the template for our “/messages” route, iterate over each of the messages to generate the feed. The final product should look like this: https://www.evernote.com/shard/s451/sh/4ede4edc-48fa-477b-a06f-2e89419df54a/092493e3a00860833e173844f6ee0eb6/res/9d34c4b8-587e-4364-a98b-74241122014d/messages.png
You may need to use computed properties for some things in the display

Tests:
Please set up some basic tests for your /messages route. We will test them using `ember test`

Please use less or sass to style your application. If you would like to use a CSS framework, we suggest semantic-ui - there’s even an easy ember package for it.

When you’ve completed the code, upload it to a public git repo and send me the link.  I will clone the repo, run npm and bower install, run “ember server”, navigate to “http://localhost:4200/messages”, and expect to see something like this: https://www.evernote.com/shard/s451/sh/4ede4edc-48fa-477b-a06f-2e89419df54a/092493e3a00860833e173844f6ee0eb6/res/9d34c4b8-587e-4364-a98b-74241122014d/messages.png


Ember can be overwhelming if you haven’t worked with it before, so don’t hesitate to reach out and ask me lots of questions!

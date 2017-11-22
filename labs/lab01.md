[<< Home](../README.md) | **Lab 1** | [Lab 2 >>](lab02.md)

# ALX315 - Lab Guide 1 - SMAPI and ASK CLI 

## **What you will do in this lab**
Work with Alexa Skills Kit Commandline Interface (ASK CLI) tool to set up a Custom Alexa skill via the Skill Management API (SMAPI)

## **What you will get at the end of this lab**
You have learned how to set up a new skill SMAPI with ASK CLI in your Amazon developer account

## **Instructions**

### **1.1.) Initialize ask-cli** 

If you never used ask-cli before, you need to initialize it and authorize this tool for your Amazon developer account.

```bash
$ ask init
```
and select __Create new Profile__. Skip the input of a profile name by hitting Enter. Also, __skip AWS credential for ask-cli__ as we don't need it. A browser window opens. Follow the login procedure by using your Amazon developer account credentials and grant this tool permission to create and update Alexa skills.  

**Side note:** We won't deploy the skill backend (Lambda function) you can find in the _/js_-folder to your AWS account. It is already hosted for you in another AWS account and your to-be-created skill will point to it and use it. That is why we skipped authorization for AWS in the initialization step. See the homework instructions below in case you would like to deploy the code as part of the skill creation / update procedure via ask-cli. 

### **1.2.) Familiarize with the skill** 

Navigate to the folder where you cloned this Github repo.

The _[skill.json](../skill.json)_ file contains metadata used to create the skill. It also has a reference to an existing Lambda function as this skill is already implemented. If you're interested in the source code you can look into the _[js](../js)_-folder  

The _[en-US.json](../models/en-US.json)_ in the _models_ directory contains the interaction model of this skill. Leave it as is. It is all set for you. 

### **1.3.) Deploy the skill** 

Now that you got a basic idea of what this skill will look like you can deploy it to your Amazon developer account with one single line. Run this command from within the root folder of this repo on your local drive. 

```bash
$ ask deploy
```

Once the deployment is finished double-check the skill has been created in your Amazon developer account by running the following command.

```bash
$ ask api list-skills
```

Already done? Great. You can dive deeper into ask-cli [here](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html) and try out a few other commands if you like.

### **Homework**

When you were initializing ask-cli in the first step of this lab, you skipped authorizing with your AWS credentials. You didn't need it at this pointing as you were creating a skill pointing to an already existing Lambda-function. At home you might want to upload and deploy the implementation of this skill (in the _js_ folder of this repo) in a Lambda-function in your own AWS account. 

1) Follow the ask-cli [quickstart guide](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) and provide this tool your AWS credentials.  

2) Next, you should go to the skill.json file in order to change the endpoint configuration which is part of the _apis_ node. Replace the _uri_ parameter in _endpoint_ with _"sourceDir": "./js/."_ and _ask deploy_ your skill again. For more information go to [CLI reference] in the developer documentation.(https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#deploy-command) 

[<< Home](../README.md) | **Lab 1** | [Lab 2 >>](lab02.md)
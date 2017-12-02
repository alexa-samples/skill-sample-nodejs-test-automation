[<< Home](../README.md) | **Lab 1** | [Lab 2 >>](lab02.md)

# Lab Guide 1 - SMAPI and ASK CLI 

## **What you will do in this lab**
Work with Alexa Skills Kit Commandline Interface (ask-cli) tool to set up a Custom Alexa skill with the Skill Management API (SMAPI).

## **What you will get at the end of this lab**
You have learned how to set up a new skill with ask-cli in an automated fashion. 

## **Instructions**

### **1.1.) Initialize ask-cli** 

If you never used ask-cli before, you need to initialize it and authorize this tool for your Amazon developer account

```bash
$ ask init
```

and select __Create new Profile__. Skip the input of a profile name by hitting Enter. Also, __skip AWS credential for ask-cli__ as we don't need it. A browser window opens. Follow the login procedure by using your Amazon developer account credentials and grant this tool permission to create and update Alexa skills.  

**Side note:** We won't deploy the skill backend (Lambda function) which you can find in the [./js](../js)-folder. It is already hosted for you in another AWS account and your skill will just point to it and use it. That is why we skipped authorization for AWS in the initialization step. See the homework instructions below in case you would like to deploy the code as part of the skill creation / update procedure via ask-cli. 

### **1.2.) Familiarize with the skill** 

Navigate to the folder where you cloned this Github repo.

The [skill.json](../skill.json) file contains metadata used to create the skill. It also has a reference to an existing Lambda function as the skill backend is already implemented and hosted for you. If you're interested in the source code you can look into the [js](../js)-folder  

The [./models/en-US.json](../models/en-US.json) in this repo contains the interaction model of the skill. Leave it as is. It is all set for you. However, it's worth having a quick look into it in order to understand what the skill expects its users to say.

### **1.3.) Deploy the skill** 

Now that you got a basic idea of what this skill will look like you can deploy it to your Amazon developer account with one single command. Run the below from within the root folder of this repo on your local drive. 

```bash
$ ask deploy
```

This execution may take 2-3 minutes to complete. Ignore the _[Warning]: Lambda deployment skipped, since AWS credentialsfor profile: [default] is missing._ you will get at the end.

Once the deployment is finished double-check if the skill has been created in your Amazon developer account by running the following command.

```bash
$ ask api list-skills
```

Do you see a skill entry called _Number guessing game_? Great!

### **Just in case you got some time ...**

Already done? You can dive deeper into ask-cli [here](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html) and try out a few other commands if you like. You could also dig into the [skill code](../js) to learn how it is implemented.

### **Homework**

When you were initializing ask-cli in the first step of this lab you skipped authorizing with your AWS credentials. You didn't need it at this point as you were creating a skill using an already existing Lambda function. At home you might want to upload and host the code of this skill in your own AWS account.

1) Follow the ask-cli [quickstart guide](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) and give this tool access to your AWS account.  

2) Next, you should go to the [skill.json](../skill.json) file in order to change the endpoint configuration which is part of the _apis_ element node. Replace the _uri_ parameter beneath _endpoint_ with _"sourceDir": "./js/."_ and _ask deploy_ your skill again. For more information go to [ask-cli reference](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#deploy-command) in the developer documentation.

[<< Home](../README.md) | **Lab 1** | [Lab 2 >>](lab02.md)
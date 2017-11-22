[<< Lab 1](lab01.md) | **Lab 2** | [Lab 3 >>](lab03.md)

# ALX315 - Lab Guide 2 - Service Simulator

## **What you will do in this lab**
Work with the service simulator in the [Amazon developer console](https://developer.amazon.com/) to manually test your Alexa skill.

## **What you will get at the end of this lab**
You have learned how to send utterances to your skill and how to examine the resulting request and response payloads send to and received from the skill Lambda endpoint.

## **Prerequisites**

- **Skill** that has been deployed to your Amazon developer account in [Lab 1](lab01.md).

## **Instructions**

### **2.1.) Play with Service Simulator** 

**2.1.1.** Go to the [Amazon developer console](https://developer.amazon.com/) and sign in. Select _Developer Console_ in the header section and navigate to _Alexa_. Click on _Alexa Skills Kit_. You should see the list of your skills - with _Number guessing game_ being one of them.
Click on the skill name _Number guessing game_ and proceed to the _Test_ section in the left menu. 

**2.1.2.** Once you're in the test section of the _Number guessing game_ skill, you have to enable testing for this skill in your account.

![](img/lab02-screen02.png)

**2.1.3.** You can now _Enter an Utterance_ and click on _Ask number guessing game_ to send the entered utterance to the skill endpoint.

![](img/lab02-screen01.png)

In the underneath section you can examine the request and response payloads sent to and returned from the skill. Continue the dialog and interact with the skill by following the instructions returned by the skill (outputspeech portion in the response). The below Voice User Interface Diagram of the skill will help you.

__Side note: Numbers in utterances__: The Service Simulator does not resolve numbers in utterances when written as integers (e.g. "the number is 10"). Instead, you should always use numerals (e.g. "the number is **ten**").

![](../assets/vui.png)

[<< Lab 1](lab01.md) | **Lab 2** | [Lab 3 >>](lab03.md)
[<< Lab 5](lab05.md) | **Lab 6** | [Lab 7 >>](lab07.md)

# ALX315 - Lab Guide 6 - Multi-turn conversations

## **What you will do in this lab**
You set up a multi-turn conversation with the skill and make a few assertions on the expected response by using the Test SDK tool. 

## **What you will get at the end of this lab**
You have learned how to chain multiple requests to simulate multi-turn conversations with your skill in one user session.

## **Prerequisites**
- **Test Lambda function** you deployed in [Lab 4](lab04.md)
- **S3 Test-Script bucket** that was created in [Lab 4](lab04.md)
- **Number guessing skill** that was deployed to your Amazon developer account in [Lab 1](lab01.md)

We recommend you to use an advanced text editor or IDE. You could also use an [Online YAML editor](https://codebeautify.org/yaml-validator) if you want.

## **Instructions**

### **6.1.) Multi-turn conversation with Invocation API** 

**6.1.1.** Open [./scripts/lab06.yml](../scripts/lab06.yml).

The _Launch_ node is still the entry point for the test client but it is not the only node anymore. A second top-level node called _GuessFive_ has been added. The Launch node is referencing to it via a YAML anchor.

__Side note:__ Anchors in YAML are defined as a value to parent nodes and start with an ampersand (e.g. _&GuessFive_). Referencing to it goes with a star followed by the anchor name (e.g. _*GuessFive_). An anchor definition always comes before its references. Learn more about [YAML anchors](http://blog.daemonl.com/2016/02/yaml.html)  

**6.1.2.** In line 8 there's an intent name missing. Please set it correctly according to what makes sense in this case. Looking at the interaction model of the skill might help you get the correct name.

**6.1.3.** Upload the [lab06.yml](../scripts/lab06.yml) file to S3 and again run the Test Lambda function. Look into the log output.

**6.1.4.** Change the script in a way it is guessing a 6. Upload the file an run the Test Lambda.

**6.1.5.** Change the script in a way it is guessing a 5 and then a 6. Upload the file an run the Test Lambda.

**6.1.6.** Change the script in a way it is guessing a 5 and then a 6 and then exits (stop) the session. Upload the file an run the Test Lambda. The intent for stopping a session is named _AMAZON.StopIntent_

[<< Lab 5](lab05.md) | **Lab 6** | [Lab 7 >>](lab07.md)
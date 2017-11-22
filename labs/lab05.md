[<< Lab 4](lab04.md) | **Lab 5** | [Lab 6 >>](lab06.md)

# ALX315 - Lab Guide 5 - Single-turn conversations

## **What you will do in this lab**
You set up a single-turn conversation with the skill and make a few assertions on the expected response by using the Test SDK tool. 

## **What you will get at the end of this lab**
You have learned how to define assertions on returned skill responses in a YAML script file and how to execute the script with help of the Test Lambda provided.

## **Prerequisites**

- **Test Lambda function** you deployed in [Lab 4](lab04.md)
- **S3 Test-Script bucket** that was created in [Lab 4](lab04.md)
- **Number guessing skill** that was deployed to your Amazon developer account in [Lab 1](lab01.md)

## **Instructions**

### **5.1.) Single-turn conversation with Invocation API** 

**5.1.1.** Open [./scripts/lab05.yml](../scripts/lab05.yml). In the configuration section update the missing parameter _skillId_ like you did in [lab04.yml](../scripts/lab04.yml). 

__Side note:__ The '#'-sign in front of a line indicates a commentary. It will be ignored by the test client and is just to help you with some extra information.

**5.1.2.** The _Launch_ node is the entry point for the test client. If neither an _intent_ nor an _utterance_ is provided (both are currently commented out), it fires a _LaunchRequest_ at your skill. That's what already happened in Lab 4. There's already one assertion made for the resulting response of the _LaunchRequest_. 

**Q5.1.3.** What does the assertion in [lab05.yml](../scripts/lab05.yml) mean?

You will now make some changes to the script file and run it with help of the Test Lambda function. Whenever you would like to run it, follow these steps:
- save your changes made in the YAML file
- upload the YAML file to the S3 bucket like you did in [Lab 4](lab04.md)
- go to the Test Lambda function in the AWS developer console and execute it like you did in [Lab 4](lab04.md)

__Side note__: The Lambda function will execute all YAML scripts it finds in the S3 bucket one by one unless you remove them from the bucket.

Now it's your turn. Try the following and upload and run the script as described above after each change.

**Q5.1.4** What happenes when you negate the assertion in line 11 of [lab05.yml](../scripts/lab05.yml) and run it?

**5.1.5.** Write at least four more assertions on the response returned by the skill. What might help you:
- Use the Service Simulator in the developer console if you want to inspect the response payload of a _LaunchRequest_. 
- The [lab05.yml](../scripts/lab05.yml) file contains a few suggestions of what expressions are supported. Assertions are written in simplified [JSONPath](http://goessner.net/articles/JsonPath/) syntax and support all operators valid in JSONPath.
- Look into the [JSON schema](https://developer.amazon.com/docs/custom-skills/request-and-response-json-reference.html#response-body-syntax) for response bodies of custom skills to use correct path expressions for assertions

Run the script as often as you like and verify your assertions are true.

### **5.2.) Single-turn conversation with Simulation API** 

You can reuse the [lab05.yml](../scripts/lab05.yml) file that you used. Change the following things:

**5.2.1.** uncomment the _utterance_ attribute in the _Launch_ node

**5.2.2.** in the configuration section at the very top of the file, change the endpoint type from _InvocationApi_ to _SimulationApi_

Rerun the script by uploading it to S3 and execute the Test Lambda function. 

**Q5.2.3.** Can you spot what's different now? 

[<< Lab 4](lab04.md) | **Lab 5** | [Lab 6 >>](lab06.md)
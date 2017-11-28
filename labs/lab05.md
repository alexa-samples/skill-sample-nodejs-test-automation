[<< Lab 4](lab04.md) | **Lab 5** | [Lab 6 >>](lab06.md)

# ALX315 - Lab Guide 5 - Single-turn conversations

## **What you will do in this lab**
You will set up a single-turn conversation with the skill and make a few assertions on the expected response by using the Test SDK tool.

## **What you will get at the end of this lab**
You have learned how to define assertions on returned skill responses in a YAML script file and know how to execute the script with help of a Lambda function.

## **Prerequisites**

- **Test Lambda function** you deployed in [Lab 4](lab04.md)
- **S3 Test script bucket** that was created in [Lab 4](lab04.md)
- **Number guessing skill** that was deployed to your Amazon developer account in [Lab 1](lab01.md)

We recommend you to use an advanced text editor or IDE. You could also use an [Online YAML editor](https://codebeautify.org/yaml-validator) if you want.

## **Instructions**

### **5.1.) Single-turn conversation with Invocation API** 

**5.1.1.** Open [./scripts/lab05.yml](../scripts/lab05.yml). 

__Side note:__ The hash (#)-sign in front of a line indicates a commentary in YAML. It will be ignored by the test client and is just to help you with some extra information.

**5.1.2.** The _Launch_ node is the entry point for the test client. If neither an _intent_ nor an _utterance_ is provided (both are currently commented out), it fires a _LaunchRequest_ at your skill. That's what already happened in Lab 4. There's already one assertion made for the resulting response of the _LaunchRequest_.

**Q5.1.3.** What does the assertion in [lab05.yml](../scripts/lab05.yml) mean?

You will now make some changes to the script file and run it with help of the Test Lambda function. Whenever you would like to run it, follow these steps:
- save your changes made in the YAML file
- upload the respective YAML file to the S3 bucket like you did in [Lab 4](lab04.md)
- go to the Test Lambda function in the AWS developer console and execute it like you did in [Lab 4](lab04.md)

__Side note__: The Lambda function will execute all YAML scripts it finds in the S3 bucket one by one unless you remove them from the bucket.

Now it's your turn. Try the following and upload and run the script as described above after each change.

**5.1.4** Uncomment line 8 of [lab05.yml](../scripts/lab05.yml) and run it. What happens and why does it fail? 

**5.1.5** Try to fix the script by changing the assertion and upload the file again. When running the Lambda function, the response should be "Ok" again.

**5.1.6.** Comment out line 8 again - we'd like to proceed with _LaunchRequest_ (don't forget to negate the assertion again). Now write at least three more assertions on the response returned by the skill. What might help you:
- Use the Service Simulator in the developer console if you want to inspect the response payload of a _LaunchRequest_. 
- The [lab05.yml](../scripts/lab05.yml) file contains a few suggestions of what expressions are supported. Assertions are written in simplified [JSONPath](http://goessner.net/articles/JsonPath/) syntax and support all operators valid in JSONPath.
- Look into the [JSON schema](https://developer.amazon.com/docs/custom-skills/request-and-response-json-reference.html#response-body-syntax) for response bodies of custom skills to use correct path expressions for assertions

### **5.2.) Single-turn conversation with Simulation API** 

You can reuse the [lab05.yml](../scripts/lab05.yml) file that you used. Change the following things:

**5.2.1.** uncomment line 9. 

**5.2.2.** in the configuration section at the very top of the file, change the endpoint type from _InvocationApi_ to _SimulationApi_

Rerun the script by uploading it to S3 and execute the Test Lambda function. 

**Q5.2.3.** In the log output, can you spot what's different now compared to the previous tests against the InvocationApi? 

[<< Lab 4](lab04.md) | **Lab 5** | [Lab 6 >>](lab06.md)
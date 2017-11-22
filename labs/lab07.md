[<< Lab 6](lab06.md) | **Lab 7** | [Lab 8 >>](lab08.md)

# ALX315 - Lab Guide 7 - Multi-path conversations

## **What you will do in this lab**
You set up a multi-turn conversation with the skill and make a few assertions on the expected response by using the Test SDK tool. In addition to that we introduce conditional paths entered when certain conditions are met.

## **What you will get at the end of this lab**
You have learned how to create branches run tests dynamically depedant on the skills response.

## **Prerequisites**
- **Test Lambda function** you deployed in [Lab 4](lab04.md)
- **S3 Test-Script bucket** that was created in [Lab 4](lab04.md)
- **Number guessing skill** that was deployed to your Amazon developer account in [Lab 1](lab01.md)

## **Instructions**

### **7.1.) Multi path conversation with Invocation API** 

**7.1.1.** Open [./scripts/lab07.yml](../scripts/lab07.yml). In the configuration section update the missing parameter _skillId_ like you did in [lab06.yml](../scripts/lab06.yml).

Aside from the assertions you're already familiar with some of those elements now have a value (an anchor link to another conversation step) assigned to it.

__Side note:__ Assertions that have an anchor link assigned as a value turn into _conditions_. The main difference is that the Test client won't throw an exception in case it is not true. The client rather just evaluates the conditional statement and follows the anchor reference (conversation path) in case it is true. If it's false it steps over it.

**7.1.2.** In line 25 to 27 there are some values missing. Please set it correctly according to what makes sense in this case.  

**7.1.3.** When you are done, upload the [lab07.yml](../scripts/lab07.yml) file to S3 and again run the Test Lambda function. 

**7.1.4.** Extend the script so it is going down from 4 to 1 and going up from 6 to 10 when looking for the number the skill thinks of.

The [./scripts/lab07-final.yml](../scripts/lab07-final.yml) file gives you the right solution.

__Q7.1.5.__ Also look into [./scripts/lab07-extended.yml](../scripts/lab07-extended.yml) file as it provides more configuration options. Can you guess what these new properties stand for and what are use cases to set things like a fixed timestamp or user-id? 

[<< Lab 6](lab06.md) | **Lab 7** | [Lab 8 >>](lab08.md)
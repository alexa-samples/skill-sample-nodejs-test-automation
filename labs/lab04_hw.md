[<< Lab 4](lab04.md) | **Lab 4 Homework** | [Lab 5 >>](lab05.md)

# Lab Guide 4 Homework - Create Login With Amazon credentials

In this workshop we used generic Login With Amazon _clientId_ and _clientSecret_. However, we recommend
you to create your own credentials in the Amazon developer portal. Follow the below instructions to create
a security profile and generate a refresh token for the test client to access your skills.

__Side Note:__ When you're working with your own _clientId_ and _clientSecret_ you cannot reuse the _refreshToken_ generated and stored in ~/ask/cli_config_ by ask-cli. You really need to generate your own
by using your _clientId_ and _clientSecret_ as described below.

## **Instructions**

### **4.1) Set up Login With Amazon (LWA) credentials** 

LWA credentials are required by the test client to get access to your skill. You need three things: a _client-id_, a _client-secret_ and _refresh-token_ from LWA.

**4.1.1.** Go to the [Amazon developer console](https://developer.amazon.com/), click on _Developer Console_ in the header section and navigate to _Apps & Services_ 

**4.1.2.** Click on _Login With Amazon_ and _Create A New Security Profile_

![](img/lab04-screen01.png)

**4.1.3.** Give it a name, description and policy-url _https://<span></span>example<span></span>.com_ as suggested below and hit _Save_.

![](img/lab04-screen02.png)

**4.1.4.** Click on _Show ClientID and Secret_. Copy the client-id and client-secret.

**4.1.5.** Back in the browser, go to _Manage_ -> _Web Settings_ and click on _Edit_. Set _https://<span></span>example<span></span>.com_ as the _Allowed Return Url_.

**4.1.6.** Browse to 

https://<span></span>www.amazon<span></span>.com/ap/oa?client_id=__{clientId}__&scope=alexa::ask:skills:test&response_type=code&redirect_uri=https://example.com 

after you replaced __{clientId}__ with your clientId you pasted into the lab04.yml file

**4.1.7.** Follow the authentication and authorization procedure. You end up being redirected to example<span></span>.com. Look at the URL in the address line of your browser. It should contain an authorization _code_.

**4.1.8.** Take the code you retrieved in the previous step and use it in the following HTTP POST request command in your local shell.

```bash
curl -d "client_id={clientId}&client_secret={secret}&code={code}&grant_type=authorization_code&redirect_uri=https://example.com" -H "Content-Type: application/x-www-form-urlencoded" -X POST https://api.amazon.com/auth/o2/token
```
- where _{clientId}_ needs to be replaced by the clientId you got in step 4.1.4.
- where _{secret}_ needs to be replaced by the clientSecret you got in step 4.1.4.
- where _{code}_ needs to be replaced by the authorization code you received in step 4.1.7.

This curl command returns a JSON payload that contains the refresh token you need. Copy it.

**Side note** If you made a mistake in step 4.1.8. and retrieve an error it is necessary to return to step 4.1.6. as the authorization code is only valid for one request.

[<< Lab 4](lab04.md) | **Lab 4 Homework** | [Lab 5 >>](lab05.md)
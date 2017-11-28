/**
    Copyright 2017 Amazon.com, Inc. and its affiliates. All Rights Reserved.
    Licensed under the Amazon Software License (the "License").
    You may not use this file except in compliance with the License.
    A copy of the License is located at
      http://aws.amazon.com/asl/
    or in the "license" file accompanying this file. This file is distributed
    on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express 
    or implied. See the License for the specific language governing
    permissions and limitations under the License.

    This skill demonstrates how to automate testing an Alexa skill.
 **/

"use strict";

module.exports = Object.freeze({
    numberLimit : 10,
    welcome : 'welcome to the number guessing skill.',
    welcomeBack : 'welcome back to the number guessing skill.',
    help : 'this skill is your game master for a simple number guessing game. Do you want to start a game now?',
    helpReprompt : 'do you want to start a game now?',
    guess : 'I am thinking of a number between one and <say-as interpret-as="cardinal">10</say-as>. What is your guess?',
    correct : 'Great. That’s it. You want more?',
    incorrect: 'Sorry. That’s not correct.',
    numberNotSaid: 'Sorry, I was not able to get the number you said. Please answer with a number.',
    numberIsLower: 'My number is lower than',
    numberIsHigher: 'My number is higher than',
    sorry : 'sorry, something went wrong. say start a quiz or stop to exit.',
    goodBye : 'Good bye.'
});
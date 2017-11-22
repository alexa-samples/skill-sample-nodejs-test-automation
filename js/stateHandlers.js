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

'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');
var assets = require('./assets');

var welcomeSpeech = '';

var stateHandlers = {
    'LaunchRequest': function () {
        welcomeSpeech = (this.attributes['hasAlreadyBeenHere']) ? assets.welcomeBack : assets.welcome;
        this.emit('StartQuiz');
    },
    'StartQuiz': function () {
        if (this.attributes['number']) {
            this.emit(':ask', assets.numberNotSaid);
        }
        if (!this.attributes['hasAlreadyBeenHere']) {
            this.attributes['hasAlreadyBeenHere'] = 1;
        }
        this.attributes['number'] = (Math.floor(Math.random() * (assets.numberLimit - 1))) + 1;
        this.response.speak(welcomeSpeech + ' ' + assets.guess).listen(assets.guess);
        this.emit(':responseReady');
    },
    'GuessNumber': function () {
        var targetNum = (this.attributes['number'] || -1);

        var guessNumber = parseInt(this.event.request.intent.slots.number.value);

        var outputSpeech = targetNum === guessNumber ? assets.correct :
            assets.incorrect + ' ' + (targetNum > guessNumber ? assets.numberIsHigher : assets.numberIsLower) + ' <say-as interpret-as="cardinal">' + guessNumber + '</say-as> <p>' + assets.guess + '</p>'

        this.emit(':ask', outputSpeech);
    },
    'AMAZON.YesIntent': function () {
        this.emit('StartQuiz');
    },
    'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(assets.help).listen(assets.helpReprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.StopIntent': function () {
        this.attributes['number'] = null;
        this.response.speak(assets.goodBye);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function () {
    },
    'Unhandled': function() {
        this.response.speak(assets.sorry).listen(assets.sorry);
        this.emit(':responseReady');
    }
};

module.exports = stateHandlers;
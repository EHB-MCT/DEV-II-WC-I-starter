"use strict";

function init() {
    console.log("Init");
    // TODO: log the document using console.log to test if you can get access to it
    // TODO: log the submit button. If that works, store that button in a variable
    // TODO: attach an event listener to that button and show a log "button clicked"
    // TODO: if the submit button is clicked, the lever is pulled (= call that function)
}

function pullLever() {
    // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
    // TODO: spin the slot machine
    // TODO: show slots and win status
}

function showSlots() {
    // TODO: show the slot symbols in HTML
}

function showGameResult() {
    // TODO: show a win or lose message in HTML
}

const slotMachine = {
    calculateStatus: function() {
        // TODO: check for three similar symbols
    },
    getRandomSymbol: function() {
        // TODO: return a single random symbol
    },
    reset: function() {
        // TODO: Empty out the slots
    },
    symbols: [ "♠", "♥", "♣", "♦"],
    slots: [],
    slotsAmount: 3,
    spin: function() {
        // TODO: generate three random symbols, and add them to the slots of the slotMachine
    },
    win: true
};

init();

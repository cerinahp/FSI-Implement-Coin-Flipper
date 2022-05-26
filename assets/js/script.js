// TODO: Declare any global variables we need
var numOnes = 0
var numTwo = 0
var numThree = 0
var numFour = 0
var numFive = 0
var numSix = 0
var totRolls = 0


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    var flipButton  = document.querySelector("#rollDice")
    var clearButton = document.querySelector("#clearScore")
    var status      = document.querySelector(".status-message")
    var image       = document.querySelector("img")

    var ones       = document.querySelector("#one")
    var onesPerc   = document.querySelector("#one-percent")
    var twos       = document.querySelector("#two")
    var twosPerc   = document.querySelector("#two-percent")
    var threes     = document.querySelector("#three")
    var threesPerc   = document.querySelector("#three-percent")
    var fours      = document.querySelector("#four")
    var foursPerc   = document.querySelector("#four-percent")
    var fives       = document.querySelector("#five")
    var fivesPerc   = document.querySelector("#five-percent")
    var sixes       = document.querySelector("#six")
    var sixesPerc   = document.querySelector("#six-percent")
    // TODO: Add event listener and handler for flip and clear buttons

    function scoreboard(ones, twos)
    {
        ones.textContent = ones
        twos.textContent = twos
        onesPerc.textContent         = Math.round(ones / (ones + twos) * 100) + "%"
        twosPerc.textContent         = Math.round(twos / (ones + twos) * 100) + "%"
    }

    flipButton.addEventListener('click', function(){
        // TODO: Determine rolled outcome
        let rolledValue = Math.ceil(Math.random() * 6)
console.log (rolledValue)

        if (rolledValue == 1)
        {
            console.log("ones")
            //heads
            // update head count
            numOnes = numOnes + 1

            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You Rollled a One"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice1.png")
        } else if 

            (rolledValue == 2){
                       
            console.log("two")
            // update head count
            numTwo = numTwo + 1
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You Rolled a Two"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice2.png")
        } else if 

        (rolledValue == 3){
                       
            console.log("three")
            // update head count
            numThree = numThree + 1
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You Rolled a Three"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice3.png")
        }

        else if 

        (rolledValue == 4){
                       
            console.log("four")
            // update head count
            numFour = numFour + 1
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You Rolled a Four"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice4.png")
        }
        else if 

        (rolledValue == 4){
                       
            console.log("four")
            // update head count
            numFour = numFour + 1
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You Rolled a Four"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice4.png")
        }
        else if 

        (rolledValue == 5){
                       
            console.log("Five")
            // update head count
            numFive = numFive + 1
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You Rolled a Five"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice5.png")
        }
        else if 

        (rolledValue == 6){
                       
            console.log("Six")
            // update head count
            numSix = numSix + 1
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You Rolled a Six"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice6.png")
        }

        // TODO: Update image and status message in the DOM
        ones.textContent = numOnes
        twos.textContent = numTwo
        onesPerc.textContent         = Math.round(numOnes / totRolls * 100) + "%"
        twosPerc.textContent         = Math.round(numTwo / totRolls * 100) + "%"

        threes.textContent = numThree
        fours.textContent = numFour
        threesPerc.textContent         = Math.round(numThree / totRolls * 100) + "%"
        foursPerc.textContent         = Math.round(numFour / totRolls * 100) + "%"

        fives.textContent = numFive
        sixes.textContent = numSix
      fivesPerc.textContent         = Math.round(numFive / totRolls * 100) + "%"
        sixesPerc.textContent         = Math.round(numSix / totRolls * 100) + "%"

    })


    clearButton.addEventListener('click', function(){
        var numOnes = 0
        var numTwo = 0
        var totThree = 0
        var totFour = 0
        var totFive = 0
        var totSix = 0
        var totRolls = 0
        ones.textContent = numOnes
        twos.textContent = numTwo
        onesPerc.textContent         = Math.round(numOnes / totRolls * 100) + "%"
        twosPerc.textContent         = Math.round(numTwo / totRolls * 100) + "%"

        threes.textContent = numThree
        fours.textContent = numFour
        threesPerc.textContent         = Math.round(numThree / totRolls * 100) + "%"
        foursPerc.textContent         = Math.round(numFour / totRolls * 100) + "%"

        fives.textContent = numFive
        sixes.textContent = numSix
      fivesPerc.textContent         = Math.round(numFive / totRolls * 100) + "%"
        sixesPerc.textContent         = Math.round(numSix / totRolls * 100) + "%"

    })

})
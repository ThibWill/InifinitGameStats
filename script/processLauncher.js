const fs = require("fs");
const { exec } = require('child_process');
const results = require('../data/results.json');

/**
 * Launch many instances of infinitMoneyParadox, with the money to gamble each round and the sum to reach for each game
 * @param {number} nbProcesses Number of instances
 * @param {number} gambleMoney Money to gamble each round
 * @param {number} moneyToReach Money to reach at the end of a game
 */
async function infinitMoneyParadoxProcesses(nbProcesses, gambleMoney, moneyToReach) {
  let cumulateRounds = 0;
  function processMoney(numProcess) {
    return new Promise((resolve, reject) => {
      exec(`node ${__dirname}/infinitMoneyParadox.js ${gambleMoney} ${moneyToReach}`, (error, stdout, stderr) => { 
        if (error) {
          console.error(`error: ${error.message}`);
          reject();
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          reject();
        }
  
        console.log(`Process ${numProcess}: ${stdout}`);
        cumulateRounds += parseInt(stdout.split(',')[1].replace('rounds:', '').trim());
        resolve();
      });
    });
  }

  function writeResults(finalSum) {
    if (results.infinitMoneyParadox[gambleMoney]) {
      results.infinitMoneyParadox[gambleMoney].push(finalSum);
    } else {
      results.infinitMoneyParadox[gambleMoney] = [finalSum];
    }

    fs.writeFileSync(`${__dirname}/../data/results.json`, JSON.stringify(results));
  }

  return new Promise((resolve, reject) => {
    Promise.all(Array.from(Array(nbProcesses), (_,i)=>processMoney(i))).then(() => {
      const averageNumberRounds = Math.round(cumulateRounds/nbProcesses);
      console.log(`Final results when gambling ${gambleMoney}:\nNumber parallele executions => ${nbProcesses}\nAverage number of rounds => ${averageNumberRounds}`);
      writeResults(averageNumberRounds);
      resolve();
    }).catch((err) => {
      reject(JSON.stringify(err))
    });
  })
};

module.exports = { 
  infinitMoneyParadoxProcesses 
};

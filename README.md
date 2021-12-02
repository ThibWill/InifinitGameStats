# InfinitMoneyParadox
## Simulation of the Petersburg Paradox Game

You enter the Petersburg casino. In each game, your entrance fee is $20. During such a game, a coin is thrown repeatedly until it stops showing "head". You win 2(n+1)-20 dollars, if n times "head" appears. The bank makes 20-2(n+1) dollars.
You will usually lose money on a normal day. But mathematics predicts that you are always winning money on the long term.

More informations: https://plato.stanford.edu/entries/paradox-stpetersburg/

## Goals

We want to verify that we will win money at a certain point. We want to test for different entrance fees ($1 to $32) and see for each one the average number of entrances we need to gain $1 000 000.

## Simulation

For each fee, we simulate 100 games where we have infinit entrances, and infinit money to spend. We stop when we reach a gain of $1 000 000. 

## Results

Results for 400 games:

[Chart results](docs/chart.png)

```
{
  "infinitMoneyParadox": {
    "1":[53749,53657,55333,50582],
    "2":[58751,54370,58982,57887],
    "3":[62546,57883,58154,62951],
    "4":[66511,65928,64539,65180],
    "5":[70656,63334,71127,68196],
    "6":[71456,78118,76821,74212],
    "7":[77511,79716,80768,78398],
    "8":[90090,84531,90544,87821],
    "9":[94548,90306,92157,98490],
    "10":[113051,107736,106581,100226],
    "11":[115574,123504,106979,110148],
    "12":[135834,137085,132859,120498],
    "13":[133922,150111,140867,152768],
    "14":[181809,176831,174901,168315],
    "15":[199101,211935,197840,211219],
    "16":[228255,266533,246326,246200],
    "17":[303865,301955,294025,314775],
    "18":[405690,409708,409786,411274],
    "19":[528197,496194,490754,635159],
    "20":[562619,785955,815300,787954],
    "21":[961333,1133051,928243,1032434],
    "22":[1829735,1875723,1721788,1662086],
    "23":[2146539,2195390,1981389,2135035],
    "24":[3683585,3164689,5484930,2559833],
    "25":[5361239,7977522,7756959,4689352],
    "26":[8596123,7574029,13064639,9034311],
    "27":[20787250,22219654,23030588,9048370],
    "28":[46359362,37955164,23178984,29972057],
    "29":[57488382,41248854,93444188,55083456],
    "30":[105733268,94781501,106577518,78980913],
    "31":[188146979,197242733,136419343,100243639],
    "32":[304857522,378969921,287573334,349346833]
  }
}
```



## Requirements
NodeJS at least v10

## How to use

To launch a simulation:
```nodejs
node ./script/index.js
```
You can launch the script many times, results will be save in *./data/results.json*.
Then you can copy paste the results in *./front/graphInfinitMoneyParadox.js* 
and see the chart with *./front/graphInfinitMoneyParadox.html* in the navigator.

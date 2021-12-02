window.onload = () => {
  const infinitMoneyParadox = {
      1:[53749],2:[58751],3:[62546],4:[66511],5:[70656],6:[71456],7:[77511],8:[90090],9:[94548],
      10:[113051],11:[115574],12:[135834],13:[133922],14:[181809],15:[199101],16:[228255],17:[303865],18:[405690],
      19:[528197],20:[562619],21:[961333],22:[1829735],23:[2146539],24:[3683585],25:[5361239],26:[8596123],27:[20787250],
      28:[46359362],29:[57488382],30:[105733268],31:[188146979],32:[304857522]
  }
  
  const labels = [...Object.keys(infinitMoneyParadox)];
  const averageValue = [...Object.values(infinitMoneyParadox).map(values => values.map(nb => Math.round(nb / values.length)).reduce((prev, next) => prev + next))];
  console.log(averageValue);
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: averageValue,
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

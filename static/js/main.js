// This function will load the data in an order
// ONLY when the data is loaded then it will execute a function
// In this function we call the functions to make the D3 visualizations
window.onload = function()
{
  const size_of_buffer = 1*1024*1024
  var buffer = new ArrayBuffer(size_of_buffer)

  var data = new Uint32Array(buffer, 0, size_of_buffer/2/Uint32Array.BYTES_PER_ELEMENT)
  var data2 = new Uint32Array(buffer, size_of_buffer/2)

  for (let i=0; i< data.length; i++){
    data[i] = i
    data2[i] = Math.random() * 100
  }
  makeBar(data, data2)
};

// 1 GB
//60000000
// 500 mb
//30000000
// 250 mb
// 15000000
//1.048.576.000
//1.073.741.824

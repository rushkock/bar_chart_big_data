
function loadData()
{
  const size_of_buffer = 2*1024*1024*1024
  var buffer = new ArrayBuffer(size_of_buffer)
  var data = new Uint32Array(buffer, 0, size_of_buffer/2/Uint32Array.BYTES_PER_ELEMENT)
  var data2 = new Uint32Array(buffer, size_of_buffer/2)
  for (let i=0; i< data.length; i++){
    data[i] = i
    data2[i] = Math.random() * 100
  }
  makeBar(data, data2)
};

// read csv
function read_csv(){
var requests = [d3.csv('../static/data/big_data_1.csv')];

Promise.all(requests).then(function(response) {
   console.log(response)
   console.log(roughSizeOfObject(response))
   console.log(JSON.stringify(response).length)
}).catch(function(e) {
    throw(e);
});
};
function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}
// read json
function read_json(){
data = []
oboe('../static/data/big_data_2.json')
   .node('*', function( result ){
		 data.push(result)
 })
  .done(function(result){
  	console.log(data)
  })
	.fail(function(error) {
		 console.log(error)
	});
};

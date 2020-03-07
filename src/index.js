
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(Array.isArray(matrix)==false)
  {
    return [];
  }
  for (let index = 0; index < matrix.length; index++) {
    if(index%2==1)
    {
        matrix[index].reverse();
    }
}
let a=[];
let rec=function(matrix){
for(let i=0;i<matrix.length;i++){
  let e=matrix[i];
  if (Array.isArray(e)==true)
            rec(e);
        else
        {
            a.push(e);
        }    
}
}
rec(matrix);
return a;
}

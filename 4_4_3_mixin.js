function printf(format){
  for (var i = 0; i < arguments.length; i ++ ){
    console.log(arguments);
  
    var pattern = new RegExp('\\{'+(i-1)+'\\}','g');
    format = format.replace(pattern, arguments[i]);
  }
  console.log(format);
}

printf('hello, Ms.{0}. I am {1}.','Yoko','Tim');
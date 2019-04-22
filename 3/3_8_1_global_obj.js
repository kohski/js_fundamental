let str = '!"#$%&()+-*/@~_|;:,.';
enc = encodeURI(str); 
enc_com = encodeURIComponent(str);

console.log(enc);
console.log(enc_com);

console.log(decodeURI(enc));
console.log(decodeURIComponent(enc_com));
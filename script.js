function shortcut(s1, s2) {
  // your code here
	let str1 = s1.trim();
	let str2 = s2.trim();
	let str3 = s1.charCodeAt(0) + s2.charCodeAt(0);
	return str3;
	
}

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

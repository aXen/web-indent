//
// Sample Javascript test code
//
//
/

// = Case: Arithmetic (1)
var x = 1 + 1; 	// 0

// = Case: Arithmetic (2)
var x = 1 + 	// 0
1; 		// 1

// = Case: Arithmetic (3)
var x = 1 + 	// 0
1 +  		// 1
1; 		// 1

// = Case: Object (1)
var x = { 		// 0
	// comment 	// 1
	y : y, 	// 1
	z : z		// 1
} 			// 0

// = Case: Object (2)
var x = { 		// 0
	// comment 	// 1
	y : {		// 1
		z: z, // 2
		w: w  // 2
	}, 		// 1
	t: t 		// 1
} 			// 0


// Case: Function (1)
function $blah() { 	// 0
	x; 			// 1
	y; 			// 1
} 				// 0

// Case: Function (2)
var $blah = function() { 	// 0
	x; 				// 1
	y; 				// 1
} 					// 0

// Case: Function(3)
var x = { 				// 0 
	$blah: function() { 	// 1
		y; 			// 2
	} 				// 1
} 					// 0

// Case: Function(4)
function $blah( 	// 0 
	x, 		// 1
	y, 		// 1
	z ) { 	// 1
} 			// 0

// Case: Function (5)
function $blah( 	// 0 
	x, 		// 1
	y, 		// 1
	z ) { 	// 1
	x; 		// 1
} 			// 0



// = Case: if (1)
if ( x ) { 	// 0
	x; 	// 1
} 		// 0 

// = Case: if (2)
if(x) 	// 0  
	x; 	// 1
y; 		// 0

// = Case: if (3)
if(x) 	// 0
{ 		// 0
	x; 	// 1
} 		// 0

// = Case: if (4)
if( x == y && 	// 0
	y == z || 	// 1
	z == w) { 	// 1
	x; 		// 1
} 			// 0

// = Case: if (4a)
if( x == y && 	// 0
	y == z || 	// 1
	z == w)  	// 1
{ 			// 0
	x; 		// 1
} 			// 0


// = Case: if (5)
if(x) 		// 0
	// comment 	// 1
	y; 		// 1
x; 			// 0



// = Case: if else (1)
if ( x ) { 	// 0
	x; 	// 1 
} else { 	// 0
	y; 	// 1
} 		// 0  

// = Case: if else (2)
if ( x ) 	// 0 
	x; 	// 1
else 		// 0
	y; 	// 1

// = Case: if else(3)
if(x) 	// 0
{ 		// 0
	x; 	// 1 
} 		// 0
else 		// 0
{ 		// 0
	y; 	// 1
} 		// 0

// = Case: if elseif else (1)
if ( x ) { 	// 0
	x; 	// 1
} else if ( y ) { 	// 0
	y; 	// 1
} else { 	// 0
	z; 	// 1
} 		// 0

// = Case: if elseif else (2)
if ( x ) 	// 0
	x; 	// 1
else if ( y ) 	// 0
	y; 	// 1
else   	// 0
	z; 	// 1

// = Case: if elseif else (3)
if(x) 	// 0
{ 		// 0
	x; 	// 1
} 		// 0
else if(y) 	// 0
{ 		// 0
	y; 	// 1
} 		// 0 
else  	// 0
{ 		// 0
	z; 	// 1
} 		// 0

// = Case: for (1)
for (var i = 0; i < blah.length; i++) { 	// 0
	blah[i]; 					// 1
}; 							// 0

// = Case: for (2)
for (var i = 0; i < blah.length; i++) 	// 0
	blah[i]; 					// 1

x; 							// 0

// = Case: switch 
switch(x) { 	// 0
case "y": 		// 0
	y; 		// 1
	break; 	// 1

case "z": 		// 0
	z; 		// 1
	break; 	// 1

default: 		// 0
	w; 		// 1 
	break; 	// 1
} 		

// = Case: try (1)
try {
	x;
}

// = case: try (2)
try 
	x;
y;

// = Case: try (3)
try 
{
	x;
}

// = Case: try catch (1)
try {
	x;
} catch(e) {
	y;
}

// case: try catch (2)
try 
{
	x;
} 
catch(e)
{
	y;
}

// Case: try catch (3)
try 
	x;
catch(e)
	y;


// Case: try catch finally (1)
try { 		// 0
	x; 		// 1
	y; 		// 1
} catch(e) { 	// 0 
	x; 		// 1 
	y;  		// 1
} finally { 	// 0
	x; 		// 1
	y;  		// 1
}

// = Case: try catch finally (2)
try 		// 0
	x; 	// 1
catch(e) 	// 0
	y; 	// 1
finally  	// 0
	z; 	// 1

// = Case: try catch finally (3)
try 			// 0
	// comment 	// 1
	x; 		// 1
catch(e) 		// 0
	// comment 	// 1
	y; 		// 1
finally  		// 1
	// comment 	// 1
	z; 		// 1

// = Case: Anonymous Function (1)
(function(x) { 	// 0
	x; 		// 1
	y; 		// 1
})(x); 		// 0

// = Case: Anonymous Function (2)
(function(x)  	// 0
{ 			// 0
	x; 		// 1
	y; 		// 1
})(x); 		// 0

// = Case: Anonymous Function (2)
(function(x)  	// 0
{ 			// 1
	x;  		// 1
	y; 		// 1
} 			// 0
)(x); 		// 0

// = Case: Anonymous Function (1)
(function(x) { 	// 0
	x; 		// 1
	y; 		// 1
} 			// 0
)(x); 		// 0

// = Case: Anonymous Function (2)
(function(x) { 	// 0
	x; 		// 1
	y; 		// 1
})(x); 		// 0

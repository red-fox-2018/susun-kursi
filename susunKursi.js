// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) {
	let seats = []
	for(let i=0; i<row; i++) { // rowa diganti menjadi row
		seats.push([]) // seat diubah menjadi seats
		// debugger
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) //function salah, ditambahkan s
	// debugger
	let row = 0

	for(let i = 0; i < arr.length; i++) { //-1 dihapus agar sampai indeks paling akhir
		seats[row].push(arr[i]); // seat menjadi seats
		debugger
		if(row < 2) {
			row++
		} else if (row == 2){
			row = 0 // == diubah menjadi =
		}
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) { // i=1 diganti menjadi i=0
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)

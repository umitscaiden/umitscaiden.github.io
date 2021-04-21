// Utils
function rand(min, max) {	return Math.floor(Math.random() * (max - min + 1)) + min }

function randomString(length,
	chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
	var result           = []
	var characters       = chars
	var charactersLength = characters.length
	for ( var i = 0; i < length; i++ ) {
		result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
 }
 return result.join('')
}


// Username

document.getElementById('uname-insert-lc').onclick = () => {
	document.getElementById('username').innerHTML +=
		document.getElementById('letter-selection-un').value
}

document.getElementById('uname-insert-uc').onclick = () => {
	document.getElementById('username').innerHTML +=
		document.getElementById('letter-selection-un').value
			.toUpperCase()
}

document.getElementById('uname-clear').onclick = () => {
	if (!confirm('Are you sure you want to clear the field?'))
		alert('Field will be cleared nevertheless')

	document.getElementById('username').innerHTML = ''
}

// Password

document.getElementById('pwd-insert').onclick = () => {
	document.getElementById('password').innerHTML +=
		String.fromCharCode(Number(
			document.getElementById('pwd-charcode').value
		))

	document.getElementById('pwd-charcode').value = ''
}

document.getElementById('pwd-clear').onclick = () => {
	if (!confirm('Are you sure you want to clear the field?')) alert('Field will be cleared nevertheless')

	document.getElementById('password').innerHTML = ''
}

// DOB

document.getElementById('dob-year').oninput = () => {
	document.getElementById('dob-year-span').innerHTML = 
		document.getElementById('dob-year').value
}

document.getElementById('dob-month').oninput = () => {
	document.getElementById('dob-month-span').innerHTML = 
		document.getElementById('dob-month').value
}

document.getElementById('dob-day').oninput = () => {
	document.getElementById('dob-day-span').innerHTML = 
		document.getElementById('dob-day').value
}

// Phone number

function shuffle(n) {
	const pre = document.getElementById('phone').innerHTML
	var arr = pre.split(' ').join('')
		.split('')

	arr[n-1] = String(rand(0, 9))

	document.getElementById('phone').innerHTML = 
		arr[0] + arr[1] + arr[2]
		+ ' ' +
		arr[3] + arr[4] + arr[5]
		+ ' ' +
		arr[6] + arr[7] + arr[8]
}

// Captcha
const challanges = [
	() => {
		alert('Press ok if you are not a bot')
		return true
	},

	() => {
		return !confirm('Are you a bot?')
	},

	() => {
		const num_1 = rand(1, 69420)
		const num_2 = rand(1, 69420)

		const ans = Number(prompt(`What is [ ${num_1} + ${num_2} ]`))

		return ans === num_1 + num_2
	},

	() => {
		const rs = randomString(10, 'abcdefghijklmnopqrstuvwxyz')
		const ans = prompt(`Pleasy type '${rs}' in uppercase`)

		return ans === rs.toUpperCase()
	},

	() => {
		const rs = randomString(10)
		const ans = prompt(`Pleasy type '${rs}' in uppercase`)

		return ans === rs.toUpperCase()
	}
]

document.getElementById('captcha').onclick = () => {
	document.getElementById('captcha-status').innerHTML = '<i>Captcha in progress</i>'

	const rounds = rand(5, 25)
	var score = 0

	for (let i = 0; i < rounds; i++) {
		const c = challanges[rand(0, challanges.length - 1)]

		if (c()) {
			score++
		}
	}

	if (score >= ((rounds / 100) * 95)) {
		document.getElementById('captcha').style.display = 'none'
		document.getElementById('captcha-solved').style.display = ''
		document.getElementById('captcha-status').innerHTML = '<i>Captcha done</i>'
		document.getElementById('register').disabled = false
		document.getElementById('captcha-img').style.display = ''
	} else {
		document.getElementById('captcha-status').innerHTML = '<i>Captcha failed</i>'
	}
}

// Register
document.getElementById('register').onclick = () => {
	alert('Registration failed, please try again later ❤️')
	location.reload()
}
const timeFirst = document.querySelector('h1')
let timeSecond = 15

displayTime(timeSecond)

const countDown = setInterval(()=>{
	timeSecond--
	displayTime(timeSecond)
	if(timeSecond <= 0 || timeSecond <1 ){
		timeIsOver()
		clearInterval(countDown)
	}
},1000)

function displayTime(second){
	const minutes = Math.floor(second /60) 
	const seconds = Math.floor(second % 60)

	timeFirst.innerHTML = `${minutes <10 ? '0': ''}${minutes}:${seconds <10 ? '0': ''}${second}`
}

function timeIsOver(){
	timeFirst.innerHTML = 'Time is over'
}
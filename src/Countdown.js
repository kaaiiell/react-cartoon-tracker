import React,{useState,useEffect} from 'react';

function Countdown(props){
  const beyond = ()=>{
    if(episode>props.episodes){
      return true;
    }
    else{
      return false;
    }
  }
  const getEpisodeNum = () =>{
    let iso = new Date(props.startDate)
    let today = new Date();
    let i =1;
    while((iso-today)<=0){
      iso.setDate(iso.getDate()+7);
      i++;
    }
    return i;
  }
  const calcTimeLeft = ()=>{
    let year = new Date().getFullYear();
    let iso = new Date(props.startDate)
    let today = new Date();
    while((iso-today)<=0){
        iso.setDate(iso.getDate()+7);
    }
    const difference = iso - today;
    
    let timeLeft = {};
    if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
    return timeLeft;
  }
    const [timeleft,setTimeleft] = useState(calcTimeLeft());
    const [episode,setEpisode] = useState(getEpisodeNum());
    const [isabove,setIsAbove] = useState(beyond());
    useEffect(() => {
        setTimeout(() => {
          setTimeleft(calcTimeLeft());
        },1000);
      });


    return(
        <>
        {(props.episodes&&!isabove)?
        <small className = "cbtext" id="i">EP{episode} {timeleft.days}d {timeleft.hours}h {timeleft.minutes}m {timeleft.seconds}s</small>
        :
        <small className = "cbtext" id="i">Not currently airing</small>
        }
        {/* <small className = "cbtext" id="i">{timeleft.days}d {timeleft.hours}h {timeleft.minutes}m {timeleft.seconds}s</small> */}
        </>
    );
}

export default Countdown;
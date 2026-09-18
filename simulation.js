const Simulation = {
  run(settings){
    const heat={Low:25,Medium:55,High:90}[settings.heat];
    const air={Low:10,Medium:45,High:80}[settings.air];
    const temp={Cool:20,Normal:50,Warm:85}[settings.temp];
    const amount={Low:85,Medium:60,High:40}[settings.amount];
    const rate=Math.round(Math.min(100, heat*.48+air*.18+temp*.28));
    const vapor=Math.round(Math.min(100, rate*.72+air*.18));
    const time=Math.max(4,Math.round(30-rate*.23));
    const evaporated=Math.round(Math.min(amount+15, rate*.42));
    return {rate,vapor,time,evaporated,remaining:Math.max(0,100-evaporated)};
  }
};
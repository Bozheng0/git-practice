function doJob(job, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  });
}

let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

doJob("刷牙", 1000)
  .then((data) => {
    console.log(data);
    return doJob("吃早餐", 3000);
  })
  .then((data) => {
    console.log(data);
    return doJob("寫功課", 1000);
  })
  .then((data) => {
    console.log(data);
    return doJob("吃午餐", 2000);
  })
  .then((data) => {
    console.log(data);
  });



/*

function doJob(job, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let now = new Date();
        resolve(`完成工作 ${job} at ${now.toISOString()}`);
      }, time);
    });
  }
  
  async function doAllJobs() {
    let now = new Date();
    console.log(`開始工作 at ${now.toISOString()}`);
  
    let data = await doJob("刷牙", 1000);
    console.log(data);
  
    data = await doJob("吃早餐", 3000);
    console.log(data);
  
    data = await doJob("寫功課", 1000);
    console.log(data);
  
    data = await doJob("吃午餐", 2000);
    console.log(data);
  }
  
  doAllJobs();

*/
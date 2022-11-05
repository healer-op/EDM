const clicksound = new Audio('click.mp3');

fetch('https://script.google.com/macros/s/AKfycbwpTWEeLHdIQisqXL_dpF9NgQExZ9DAJhg79HGqHDJjDd-Y0bPs3duQf7ERBVUooPKo/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(datas => {
    // console.log(data[0]);
    let length = datas.length;
    let j1=0;
    let j2=0;
    let j3=0;


    let data1 = [];
    let data2 = [];
    let data3 = [];


    for(var i=0;i<length;i++){
        if(datas[i].tier==1 && datas.Stock!="X"){
            data1[j1]=datas[i];
            j1++;
        }
        if(datas[i].tier==2 && datas.Stock!="X"){
            data2[j2]=datas[i];
            j2++;
        }
        if(datas[i].tier==3 && datas.Stock!="X"){
            data3[j3]=datas[i]
            j3++;
        }
    }

    
    const html1 = data1.map((img, i) =>{
        return `
        <div class="col" onclick="clicksound.play();">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="${data1[i].Picture}"
                                width="100%" height="225">
                            <div class="card-body">
                                <p>${data1[i].Car_made} <b>${data1[i].Model_Name}</b></p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="display:flex"><b>Capacity
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data1[i].Capacity}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>SpawnCode
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data1[i].SpawnCode}</p>
                                </li>
                            </ul>
                            <div class="card-footer">
                                <small class="text"><b>================= ${data1[i].Price}</b></small>
                            </div>
                        </div>
                    </div>`;
    }).join('');
    document.querySelector("#tair1").insertAdjacentHTML("afterbegin", html1);

    const html2 = data2.map((img, i) =>{
        return `
        <div class="col" onclick="clicksound.play();">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="${data2[i].Picture}"
                                width="100%" height="225">
                            <div class="card-body">
                                <p>${data2[i].Car_made} <b>${data2[i].Model_Name}</b></p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="display:flex"><b>Capacity
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data2[i].Capacity}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>SpawnCode
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data2[i].SpawnCode}</p>
                                </li>
                            </ul>
                            <div class="card-footer">
                                <small class="text"><b>================= ${data2[i].Price}</b></small>
                            </div>
                        </div>
                    </div>`;
    }).join('');
    document.querySelector("#tair2").insertAdjacentHTML("afterbegin", html2);

    const html3 = data3.map((img, i) =>{
        return `
        <div class="col" onclick="clicksound.play();">
                        <div class="card shadow-sm">
                            <img class="card-img-top"
                                src="${data3[i].Picture}"
                                width="100%" height="225">
                            <div class="card-body">
                                <p>${data3[i].Car_made} <b>${data3[i].Model_Name}</b></p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="display:flex"><b>Capacity
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data3[i].Capacity}</p>
                                </li>
                                <li class="list-group-item" style="display:flex"><b>SpawnCode
                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp</b>
                                    <p>${data3[i].SpawnCode}</p>
                                </li>
                            </ul>
                            <div class="card-footer">
                                <small class="text"><b>================= ${data3[i].Price}</b></small>
                            </div>
                        </div>
                    </div>`;
    }).join('');
    document.querySelector("#tair3").insertAdjacentHTML("afterbegin", html3);
})

